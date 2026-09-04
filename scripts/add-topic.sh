#!/bin/bash
# Does the actual work behind the "Add Help Topic" Shortcut: compresses a
# screen recording (if there is one), appends a new entry to topics.js,
# commits, and pushes. Kept as a real, testable script rather than logic
# buried inside the Shortcut itself — the Shortcut just collects input and
# calls this.
#
# Usage: add-topic.sh <recording-path-or-"none"> <title> <category> <instructions>
set -euo pipefail

if [ "$#" -ne 4 ]; then
    echo "Usage: add-topic.sh <recording-path-or-\"none\"> <title> <category> <instructions>" >&2
    exit 1
fi

RECORDING="$1"
TITLE="$2"
CATEGORY="$3"
INSTRUCTIONS="$4"

cd "$(dirname "$0")/.."   # repo root (Help/)

# Not every topic has a clip — the Shortcut passes the literal text "none"
# (its own "no clip" branch) rather than a real path in that case.
HAS_CLIP=true
if [ "$RECORDING" = "none" ]; then
    HAS_CLIP=false
elif [ ! -f "$RECORDING" ]; then
    echo "No such recording: $RECORDING" >&2
    exit 1
fi

# Always pull first — this runs on whichever machine happens to be handy
# (this Mac, or Dad's), and either could be behind the other's last push.
git pull --ff-only

CLIP_NAME=""
if [ "$HAS_CLIP" = true ]; then
    # Slugify the title for a filename, de-duplicating if it already exists
    # (e.g. two topics both called "Trimming a track").
    SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$//g')
    CLIP_NAME="${SLUG}.mp4"
    if [ -f "clips/$CLIP_NAME" ]; then
        CLIP_NAME="${SLUG}-$(date +%s).mp4"
    fi

    echo "Compressing to clips/$CLIP_NAME…"
    ffmpeg -y -nostdin -i "$RECORDING" \
        -vf "scale=960:-2,fps=15" -an \
        -c:v libx264 -crf 28 -preset slow -movflags +faststart \
        "clips/$CLIP_NAME"
else
    echo "No clip for this topic."
fi

# Escape for safe embedding: backslash first (so it doesn't double-escape
# the characters escaped after it), then the delimiter(s) actually in use.
escape_dq() { sed -e 's/\\/\\\\/g' -e 's/"/\\"/g'; }
escape_backtick() { sed -e 's/\\/\\\\/g' -e 's/`/\\`/g' -e 's/\$/\\$/g'; }

TITLE_ESC=$(printf '%s' "$TITLE" | escape_dq)
CATEGORY_ESC=$(printf '%s' "$CATEGORY" | escape_dq)
INSTRUCTIONS_ESC=$(printf '%s' "$INSTRUCTIONS" | escape_backtick)

python3 - "$TITLE_ESC" "$CATEGORY_ESC" "$INSTRUCTIONS_ESC" "$CLIP_NAME" << 'PYEOF'
import re, sys

title, category, instructions, clip = sys.argv[1:5]
clip_field = f'"{clip}"' if clip else "null"
entry = f'''    {{
        category: "{category}",
        title: "{title}",
        instructions: `{instructions}`,
        clip: {clip_field}
    }}'''

with open("topics.js") as f:
    content = f.read()

# The array's last existing entry has no trailing comma before "];" — add
# one, then insert the new entry ahead of the closing bracket.
new_content = re.sub(r'\}\s*\n\];', '},\n' + entry + '\n];', content, count=1)
if new_content == content:
    print("Could not find the end of TOPICS to insert into — aborting.", file=sys.stderr)
    sys.exit(1)

with open("topics.js", "w") as f:
    f.write(new_content)
PYEOF

git add -A
git commit -m "Add help topic: $TITLE"
git push

echo "Done — \"$TITLE\" is live in a minute or so."
