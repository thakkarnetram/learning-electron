// accessing the buttons
const videoTag = document.querySelector("video");
const startBtn = document.getElementById("startBtn")
const stopBtn = document.getElementById("stopBtn");
const videoSelectBtn = document.getElementById("videoSelectBtn")

// onclick
videoSelectBtn.onclick = getVideoSource;

// functions
const {desktopCapturer, remote} = require('electron')
const {Menu} = remote;

async function getVideoSource() {
    const inputs = await desktopCapturer.getSources({
        types: ['window', 'screen']
    })
    const options = Menu.buildFromTemplate(
        inputs.map(source => {
            return {
                label: source.name,
                click: () => selectSource(source)
            }
        })
    )
    options.popup()
}
