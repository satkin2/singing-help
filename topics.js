// Singing Help — content data. Edited by hand (or by the "Add Help Topic"
// Shortcut once that's built) — index.html reads this and never changes
// itself. Loaded as a plain <script src="topics.js">, not fetch()'d, since
// local file:// pages on iOS are unreliable about fetching sibling files.
//
// Each topic: { category, title, instructions, clip } — clip is a filename
// inside clips/, or null if there's no video for this one yet.

const TOPICS = [
    {
        category: "Test",
        title: "Proof of concept",
        instructions: "If you can see this on your phone, opened via the Shortcut, the basic mechanism works: the page loaded locally and pulled in this text from a separate file. Next step is proving a video clip loads the same way.",
        clip: null
    }
];
