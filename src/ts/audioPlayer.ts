class AudioPlayer extends HTMLElement {
    static observedAttributes = ["source", "title"] as const;
    private readonly audioElement = document.createElement("audio");

    private readonly playWrapper = document.createElement("div");
    private readonly playButton = document.createElement("button");
    private readonly playRangeTrack = document.createElement("div");
    private readonly playRangeTrackFill = document.createElement("div");
    private readonly playRangeTrackMarkerWrapper = document.createElement("div");

    private readonly playRangeTrackMarker = document.createElement("div");

    private readonly audioTitle = document.createElement("div");

    private duration = 0;
    private current = 0;

    constructor() {
        super();

        // root
        this.classList.add("inline-block", "relative", "flex", "flex-col", "justify-start", "items-stretch", "w-56", "bg-green-500");

        // hidden audio element
        this.audioElement.style.display = "none";
        this.audioElement.preload = "metadata";
        this.audioElement.addEventListener("loadeddata", () => {
            this.duration = this.audioElement.duration;
        });
        this.audioElement.addEventListener("timeupdate", () => {
            this.current = this.audioElement.currentTime;

            this.playRangeTrack.style.setProperty("--ap-progress-percentage", (this.audioElement.currentTime / this.duration).toString());
        });
        this.append(this.audioElement);

        // play button
        this.playButton.classList.add("bg-red-500", "w-16");
        const textContentPlay = "Play";
        this.playButton.textContent = textContentPlay;
        this.playButton.addEventListener("click", () => {
            if (this.audioElement.paused) {
                this.audioElement
                    .play()
                    .then(() => {
                        this.playButton.textContent = "Pause";
                    })
                    .catch((err) => console.error(err));
            } else {
                this.audioElement.pause();
                this.playButton.textContent = textContentPlay;
            }
        });

        this.playRangeTrack.classList.add(
            "relative",
            "w-[calc(100%-theme(spacing.16)-theme(spacing.5))]",
            "mx-auto",
            "flex",
            "flex-col",
            "justify-center",
            "before:absolute",
            "before:top-1/2",
            "before:bg-purple-500",
            "before:w-full",
            "before:h-2",
            "before:left-0",
            "before:-translate-y-1",
            "before:rounded-sm",
        );

        this.playRangeTrackFill.classList.add(
            "w-full",
            "h-1",
            "bg-orange-500",
            "transform-gpu",
            "origin-left",
            "scale-x-[var(--ap-progress-percentage,0)]",
            "transition-transform",
            "ease-linear",
        );
        this.playRangeTrack.append(this.playRangeTrackFill);

        this.playRangeTrackMarkerWrapper.classList.add(
            "absolute",
            "inset-0",
            "translate-x-[calc(var(--ap-progress-percentage,0)*100%)]",
            "transform-gpu",
            "transition-transform",
            "ease-linear",
        );
        this.playRangeTrack.append(this.playRangeTrackMarkerWrapper);

        this.playRangeTrackMarker.classList.add(
            "absolute",
            "top-1/2",
            "left-0",
            "bg-gray-200",
            "rounded-full",
            "size-3",
            "-translate-x-1/2",
            "-translate-y-1/2",
        );
        this.playRangeTrackMarkerWrapper.append(this.playRangeTrackMarker);

        this.playWrapper.classList.add("flex", "items-stretch", "justify-between", "size-full");
        this.playWrapper.append(this.playButton);
        this.playWrapper.append(this.playRangeTrack);
        this.append(this.playWrapper);

        // title span
        this.audioTitle.classList.add("bg-blue-500", "text-center");
        this.append(this.audioTitle);
    }
    connectedCallback() {
        // this.audio.src = this.getAttribute("source");
        console.log("Audio player mounted");
    }

    attributeChangedCallback(name: (typeof AudioPlayer.observedAttributes)[number], oldValue: string | null, newValue: string | null) {
        switch (name) {
            case "source":
                if (newValue) this.audioElement.src = newValue;
                break;

            case "title":
                if (newValue) this.audioTitle.textContent = newValue;
                break;
        }
    }
}

export default AudioPlayer;
