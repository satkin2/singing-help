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
4. When the video starts playing, press pause.
5. Switch back to Singing Capture and click "Capture from a Video".`,
        clip: "go-to-the-video-1789298638.mp4"
    },
    {
        category: "Capturing",
        title: "Enter song details",
        instructions: `After clicking "Capture from a Video", a small window asks for the
artist and the song title — this is how the recording gets named and
filed, so it's worth a moment to get right.

1. Type the artist's name (e.g. "Elvis Presley", not "elvis").
2. Type the song title.
3. Click "Start Capture".`,
        clip: "enter-song-details.mp4"
    },
    {
        category: "Capturing",
        title: "What happens when the capture finishes",
        instructions: `Once the song ends, the video stops playing automatically (if it moves on to another video instead, that gets stopped too — either way,
nothing for you to do).

The recorded audio is split into two files, Vocals.wav and Backing.wav, and filed into a new folder named after the artist and song (e.g. Bee Gees > Massachusetts).

GarageBand opens on the left with three tracks — Vocals, Backing, Recording — and Finder opens on the right showing that folder, with the two audio files and the GarageBand project inside.`,
        clip: "what-happens-when-the-capture-finishes.mp4"
    },
    {
        category: "GarageBand",
        title: "Add tracks to GarageBand",
        instructions: `Drag Vocals.wav from the Finder window onto the Vocals track in GarageBand, and Backing.wav onto the Backing track the same way.`,
        clip: null
    },
    {
        category: "GarageBand",
        title: "The Check Start warning",
        instructions: `Sometimes it's unclear whether an advert played before the video, and the capture gets flagged with an orange "check start" warning so you know to check.

If there was an ad: open the project in GarageBand, shift-click to select both the Vocals and Backing tracks together, then drag their front edge in to trim off the ad before you record — selecting both first keeps them in sync.

Either way — whether you needed to trim something or not — save in GarageBand, then click the orange "check start" warning back in the app to clear it.`,
        clip: null
    },
    {
        category: "Importing",
        title: "Downloading a backing track",
        instructions: `1. Go to a site like Karaoke Version (or wherever you get backing tracks from).
2. Find the song you want.
3. Download it — it'll usually land in your Downloads folder automatically.`,
        clip: "downloading-a-backing-track.mp4"
    },
    {
        category: "GarageBand",
        title: "Playback in GarageBand",
        instructions: `Press the spacebar to play or pause. Press Return to jump back to the very start of the song. To mute a track (e.g. to hear yourself without the original vocals), click the speaker icon on that track.`,
        clip: null
    },
    {
        category: "GarageBand",
        title: "Recording yourself singing",
        instructions: `Click the Recording track to select it. Press the red Record button (or press R) at the top of GarageBand, then sing. Press the same button again — or the spacebar — to stop.`,
        clip: null
    },
    {
        category: "GarageBand",
        title: "Adding reverb or echo to your vocal",
        instructions: `Select the Recording track, then click the Smart Controls button in the toolbar (it looks like a dial) to open the Smart Controls panel at the bottom. Turn up the Reverb or Echo knob to add that effect — start with a small amount and adjust to taste.`,
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
    },
    {
        category: "Troubleshooting",
        title: "Last Interface Error",
        instructions: `All this error means is that the StudioDock’s aren’t turned on.  Press OK to dismiss.`,
        clip: "last-interface-error.mp4"
    },
    {
        category: "Importing",
        title: "Entering the artist and song for an import",
        instructions: `Same idea as capturing — the details you type in are how the import gets named and filed.

1. Click "Import a Downloaded Backing Track".
2. Type the artist's name.
3. Type the song title.
4. Click "Import".`,
        clip: "entering-the-artist-and-song-for-an-import.mp4"
    },
    {
        category: "Importing",
        title: "What happens after importing",
        instructions: `The downloaded file is moved out of your Downloads folder and filed away properly — nothing left behind to tidy up.
GarageBand opens on the left with two tracks - Backing, Recording - and Finder opens on the right showing that folder, with one audio file and the GarageBand project inside.`,
        clip: "what-happens-after-importing.mp4"
    },
    {
        category: "Troubleshooting",
        title: "Multiple versions of the same song",
        instructions: `If you download a different backing track for a song you've already captured or imported, that's absolutely fine — it gets kept separately, not replaced. If you try to import the exact same file twice, though, you'll get a message saying so, since there'd be nothing new to add.`,
        clip: null
    },
    {
        category: "Using Singing Capture",
        title: "What the pills next to each entry mean",
        instructions: `Each entry in the list has a small label showing how it was made — "Captured" for something recorded from a YouTube video, "Imported" for a downloaded backing track. If a song ever has more than one version, this is the quickest way to tell them apart at a glance.`,
        clip: "what-the-pills-next-to-each-entry-mean.mp4"
    }
];
