const keyMapping = {
    a: { note: "C", frequency: 261.63 },
    z: { note: "C#", frequency: 277.18 },
    e: { note: "D", frequency: 293.66 },
    r: { note: "D#", frequency: 311.13 },
    t: { note: "E", frequency: 329.63 },
    y: { note: "F", frequency: 349.23 },
    u: { note: "F#", frequency: 369.99 },
    i: { note: "G", frequency: 392 },
    o: { note: "G#", frequency: 415.30 },
    p: { note: "A", frequency: 440 },
    q: { note: "A#", frequency: 466.16 },
    s: { note: "B", frequency: 493.88 }
}
  
const pianoKeys = document.getElementsByClassName("key")
const playingKey = document.getElementsByClassName("keys")
const audioContext = new (window.AudioContext || window.webkitAudioContext)()
let currentOscillator = null
let isPlaying = false
const oscillators = new Map()
  
for (let i = 0; i < pianoKeys.length; i++) {
    const key = pianoKeys[i]
    const noteContainer = key.getElementsByClassName("note")[0]
    const note = noteContainer.textContent

    key.addEventListener("mousedown", () => playSound(note))
    key.addEventListener("mouseup", () => stopSound(note))
}

window.addEventListener("keydown", (event) => {
    const { key } = event
    const mapping = keyMapping[key]

    if (mapping) {
        const { note, frequency } = mapping
        const keyElement = document.querySelector(`.keys[data-note="${note}"]`)

        if (keyElement) {
            keyElement.classList.add("playing")
        }

        playSound(frequency)
    }
})

window.addEventListener("keyup", (event) => {
    const { key } = event
    const mapping = keyMapping[key]

    if (mapping) {
        const { note } = mapping
        const keyElement = document.querySelector(`.keys[data-note="${note}"]`)

        if (keyElement) {
            keyElement.classList.remove("playing")
        }
    }

    stopSound()
})

function playSound(frequency) {
    if (!isPlaying) {
        audioContext.resume()
        isPlaying = true
    }

    if (!oscillators.has(frequency)) {
        const oscillator = audioContext.createOscillator()
        oscillator.frequency.value = frequency
        oscillator.connect(audioContext.destination)
        oscillator.start()
        oscillators.set(frequency, oscillator)
    }
}

function stopSound(frequency) {
    if (oscillators.has(frequency)) {
        const oscillator = oscillators.get(frequency)
        oscillator.stop()
        oscillator.disconnect()
        oscillators.delete(frequency)
    }

    if (oscillators.size === 0 && isPlaying) {
        audioContext.suspend()
        isPlaying = false
    }
}

window.addEventListener("keydown", (event) => {
    const { key } = event
    const mapping = keyMapping[key]

    if (mapping) {
        const { note, frequency } = mapping
        const keyElement = document.querySelector(`.keys[data-note="${note}"]`)

        if (keyElement) {
            keyElement.classList.add("playing")
        }

        playSound(frequency)
    }
})

window.addEventListener("keyup", (event) => {
    const { key } = event
    const mapping = keyMapping[key]

    if (mapping) {
        const { note, frequency } = mapping
        const keyElement = document.querySelector(`.keys[data-note="${note}"]`)

        if (keyElement) {
            keyElement.classList.remove("playing")
        }

    stopSound(frequency)
    }
})