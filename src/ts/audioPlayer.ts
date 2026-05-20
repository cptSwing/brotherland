class AudioPlayer extends HTMLElement {
    constructor() {
        super();
        console.log("I am here");
    }

    connectedCallback() {
        console.log("I am loaded");
        this.textContent = "lololol";
    }
}

export default AudioPlayer;
