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
    },
    {
        category: "Using Singing Capture",
        title: "Deleting a recording you don't want",
        instructions: `Made a duplicate, or a test you don't need to keep? You can remove it straight from the list.

1. Find the entry in Singing Capture's list.
2. Click "Delete" on that entry.
3. Confirm when it asks — this permanently removes the recording and its GarageBand project, so only do this once you're sure.`,
        clip: "deleting-a-recording-you-don-t-want.mp4"
    },
    {
        category: "GarageBand",
        title: "Add tracks to GarageBand",
        instructions: `The Finder window shows the file(s) ready to drag in — how many depends on how this one was made. An import doesn't have a Vocals track at all, so there's one file to drag instead of two.

- After a capture: drag Vocals.wav onto the Vocals track, and Backing.wav onto the Backing track.
- After an import: drag Backing.mp3 onto the Backing track — that's it, there's no Vocals track to worry about.`,
        clip: "add-tracks-to-garageband.mp4"
    },
    {
        category: "GarageBand",
        title: "The Check Start warning",
        instructions: `Sometimes it's unclear whether an advert played before the video, and the capture gets flagged with an orange "check start" warning so you know to check.

1. Once you've added the tracks to GarageBand, play from the beginning to check if it's captured part of an advert.
2. If it has caught an advert, hold down the shift key and click on the vocals and backing tracks.
3. You can tell if they're selected as they get a light blue bar at the top of each waveform.
4. Hover over either waveform. On the bottom left, you'll see a strange icon, click it and drag to where the track should begin.
5. Then click anywhere on either track and drag left, so that they start at the beginning of the play area.
6. Save GarageBand (Cmd + S).
7. Click the orange "check start" warning back in the app to clear it.`,
        clip: "the-check-start-warning.mp4"
    },
    {
        category: "GarageBand",
        title: "Playback in GarageBand",
        instructions: `A few basics for getting around while you work:

1. Press the spacebar to play or pause, or press the play button.
2. Press Return to jump back to the very start of the song, or press the Go to Beginning button.
3. To mute a track (e.g. to hear yourself without the original vocals), click the speaker icon on that track.`,
        clip: "playback-in-garageband.mp4"
    },
    {
        category: "Recording",
        title: "Preparing to record",
        instructions: `1. Click the Recording track to select it.
2. In the Track settings in the lower half of the screen, on the Input dropdown, make sure 1 (Scarlett Solo USB) is selected.`,
        clip: "preparing-to-record.mp4"
    },
    {
        category: "Recording",
        title: "Microphone setup",
        instructions: `1. Plug in the microphone.
2. Turn on 48v.
3. Plug in your headphones to the Scarlett.
4. Turn on Direct Monitor.`,
        clip: null
    },
    {
        category: "Recording",
        title: "Setting levels",
        instructions: `1. Turn the Gain to around 2:30.
2. Get about 6-8” from the microphone and speak normally.
3. You should hear yourself in the headphones.
4. Watch the ring around the gain as you speak loudly. Ideally it will stay green and stay out of the red.`,
        clip: null
    },
    {
        category: "Recording",
        title: "Recording yourself singing",
        instructions: `1. Click the Recording track to select it.
2. Press the red Record button (or press R) at the top of GarageBand.
3. Sing.
4. Press the same button again — or the spacebar — to stop.`,
        clip: "recording-yourself-singing.mp4"
    },
    {
        category: "Recording",
        title: "Recording a second take",
        instructions: `If you want to try singing a section again without losing your first attempt, just press Record again over the same part — GarageBand keeps each attempt as a separate "take" rather than throwing the old one away.`,
        clip: "recording-a-second-take.mp4"
    },
    {
        category: "Editing",
        title: "Adding reverb or echo to your vocal",
        instructions: `1. Begin playback, you need to be hearing the recording.
2. Select the Recording track.
3. If the knobs at the bottom aren't showing, click the Smart Controls button in the toolbar (it looks like a dial) to open the Smart Controls panel at the bottom.
4. Put your mouse over the Reverb knob and use the scroll wheel on the mouse to increase or decrease the effect.`,
        clip: "adding-reverb-or-echo-to-your-vocal.mp4"
    },
    {
        category: "Editing",
        title: "Smoothing out your vocal with compression",
        instructions: `If some words come out louder or quieter than others, a touch of
compression evens that out automatically.

1. Begin playback, you need to be hearing the recording.
2. Select the Recording track.
3. If the knobs at the bottom aren't showing, click the Smart Controls button in the toolbar (it looks like a dial) to open the Smart Controls panel at the bottom.
4. Turn up the Compressor knob a little, by putting your mouse over the knob and using the scroll wheel to turn it up or down — start small, it can sound squashed if you overdo it.`,
        clip: "smoothing-out-your-vocal-with-compression.mp4"
    },
    {
        category: "Editing",
        title: "Changing the key of the backing track",
        instructions: `If a song doesn't quite suit your voice, you can shift the backing track up or down without changing its speed.

1. Double-click the Backing track's blue block to open the editor at the bottom of the screen.
2. Tick "Follow Tempo and Pitch".
3. Drag the Transpose slider — each step is one semitone.

Only do this to the Backing track, not your own recording — shifting a real voice's pitch this way tends to sound artificial.`,
        clip: "changing-the-key-of-the-backing-track.mp4"
    },
    {
        category: "Editing",
        title: "Balancing the backing track and your vocal",
        instructions: `1. Click on the Backing track to select it.
2. Drag its volume slider (on the left side of the track) up or down until the balance with your voice feels right.`,
        clip: "balancing-the-backing-track-and-your-vocal.mp4"
    },
    {
        category: "Editing",
        title: "Undoing a mistake",
        instructions: `Pressed the wrong button, or don't like what just happened? Press Command + Z to undo — you can press it more than once to go back further.`,
        clip: null
    },
    {
        category: "Recording",
        title: "Doubling your voice for a fuller sound",
        instructions: `Want a bigger, fuller sound on the chorus (or the whole song)?

1. Add a second Recording track.
2. Sing along with your own first take.
3. Click on that second track to select it, then drag its volume slider (on the left side of the track — the same slider used in "Balancing the backing track and your vocal") down a little, so it sits underneath the main vocal rather than competing with it.`,
        clip: null
    },
    {
        category: "Finishing up",
        title: "Adding a finished song to Apple Music",
        instructions: `Once you're happy with a recording, you can add it to your Music library so it's there on your iPad and iPhone too, not just this Mac.

1. In GarageBand, open the Share menu and choose "Song to Music".
2. Fill in the details it asks for:
   - Song: the song title
   - Artist: [Dad's name]
   - Album: [something consistent, e.g. "[Dad's name]'s Songs"] — using
     the same album name every time is what groups all your recordings together neatly in one place.
3. It'll appear in the Music app on this Mac.
4. Give it a while and it will show up in Music on your iPhone and iPad.`,
        clip: "adding-a-finished-song-to-apple-music.mp4"
    }
];
