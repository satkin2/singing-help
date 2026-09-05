// Singing Help — content data. Edit this file (add/reorder/remove entries)
// whenever a topic needs adding — index.html itself should never need
// touching for routine content changes.
//
// Each topic: { category, title, instructions, clip } — clip is a filename
// inside clips/, or null if there's no video for this one yet.
//
// For "instructions", use backticks ` ` rather than quotes " " — inside
// backticks you can just type real line breaks (blank lines between
// paragraphs, numbered steps each on their own line, etc.) and they'll
// show up exactly as typed. Quotes don't allow that.

const TOPICS = [
    {
        category: "Capturing",
        title: "Go to the video",
        instructions: `1. Open Safari.
2. Go to YouTube.com.
3. Search for the video you want to capture.
4. When the video starts playing, press pause.`,
        clip: null
    },
    {
        category: "GarageBand",
        title: "Changing the key of the backing track",
        instructions: `If a song doesn't quite suit your voice, you can shift the backing track up or down without changing its speed.

1. Double-click the Backing track's blue block to open the editor at the bottom of the screen.
2. Tick "Follow Tempo and Pitch".
3. Drag the Transpose slider — each step is one semitone. Or just click the track and press Option (⌥) + Up or Down arrow for quick shifts.

Only do this to the Backing track, not your own recording — shifting a real voice's pitch this way tends to sound artificial.`,
        clip: null
    }
];
