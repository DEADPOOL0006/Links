// Show a confirmation popup for Telegram channel
if (confirm("Join Our Telegram Channel @shwe7ank")) {
    window.location.href = "https://t.me/students_of_klu";
}

async function init() {
    let videoElement = document.getElementById("video"),
        videoUI = videoElement.ui,
        videoControls = videoUI.getControls(),
        player = videoControls.getPlayer();

    // Player configuration for faster startup and reduced buffering
    player.configure({
        drm: {
            clearKeys: {
                "d790f0486bf8b693422cfe64d9ed342a": "52fd36bde6820b5c07ce4485642394a8"
            }
        },
        streaming: {
            startAtSegmentBoundary: true,
            ignoreTextStreamFailures: true,
            rebufferingGoal: 1,
            bufferingGoal: 3,
            bufferBehind: 5,
            autoLowLatencyMode: true,
            lowLatencyMode: true,
            jumpLargeGaps: true,
            inaccurateManifestTolerance: 0.3,
            stallEnabled: false
        },
        manifest: {
            dash: {
                ignoreMinBufferTime: true,
                autoCorrectDrift: true
            }
        }
    });

    // UI configurations
    videoUI.configure({
        controlPanelElements: ["play_pause", "mute", "volume", "spacer", "time_and_duration", "quality", "fullscreen", "overflow_menu"],
        volumeBarColors: { base: 'rgba(63, 187, 1, 1)', level: 'rgb(255, 69, 0)' },
        seekBarColors: { base: 'rgb(41, 41, 163)', buffered: 'rgb(35, 99, 3)', played: 'rgba(63, 187, 1, 1)' }
    });

    window.player = player;
    window.ui = videoUI;

    player.addEventListener("error", onPlayerErrorEvent);
    videoControls.addEventListener("error", onUIErrorEvent);

    // Load the video source
    try {
        await player.load("https://otte.live.cf.ww.aiv-cdn.net/pdx-nitro/live/clients/dash/enc/xqqu5jyoti/out/v1/190f1d69a3d5467f8fb7d9df4339bc49/cenc.mpd");
        console.log("The video has now been loaded instantly!");
    } catch (error) {
        onPlayerError(error);
    }
}

function onPlayerErrorEvent(event) {
    onPlayerError(event.detail);
}

function onPlayerError(error) {
    console.error("Error code", error.code, "object", error);
}

function onUIErrorEvent(event) {
    onPlayerError(event.detail);
}

function initFailed() {
    console.error("Unable to load the UI library!");
}

document.addEventListener("shaka-ui-loaded", init);
document.addEventListener("shaka-ui-load-failed", initFailed);
