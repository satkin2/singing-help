// Singing Help — content data. Edit this file (add/reorder/remove entries)
// whenever a topic needs adding — index.html itself should never need
// touching for routine content changes.
//
// Each topic: { category, title, instructions, clip } — clip is a filename
// inside clips/, or null if there's no video for this one yet.

const TOPICS = [
    {
        category: "Test",
        title: "Proof of concept",
        instructions: "If you can see this on your phone, the page loaded correctly and pulled this text in from a separate file (topics.js), same as it will for every real topic. Real content replaces this once GitHub Pages hosting is confirmed working end to end.",
        clip: null
    },
    {
        category: "Test",
        title: "Video clip test",
        instructions: "A synthetic test pattern, not a real recording — just confirming a video file in clips/ loads and plays correctly when hosted for real.",
        clip: "test-clip.mp4"
    },
    {
        category: "GarageBand",
        title: "Changing the key of the backing track",
        instructions: "If a song doesn't quite suit your voice, you can shift the backing track up or down without changing its speed.\n\nDouble-click the Backing track's blue block to open the editor at the bottom of the screen. Tick \"Follow Tempo and Pitch\", then drag the Transpose slider — each step is one semitone. Or just click the track and press Option (⌥) + Up or Down arrow for quick shifts.\n\nOnly do this to the Backing track, not your own recording — shifting a real voice's pitch this way tends to sound artificial.",
        clip: null
    }
];
