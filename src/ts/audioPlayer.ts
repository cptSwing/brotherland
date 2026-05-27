import createElementWithProperties from "./createElementWithProperties";

class AudioPlayer extends HTMLElement {
    static observedAttributes = ["source", "title"] as const;

    static playIconTwClass = /* tw */ "before:[mask-image:url('../../public/images/triangle.svg')]";
    static pauseIconTwClass = /* tw */ "before:[mask-image:url('../../public/images/twoRects.svg')]";

    // TODO clean up these wrt which are actually needed exposed, even if private - adding .innerHtml would be less of a hassle than .append() left and right
    private readonly audioElement = createElementWithProperties({
        element: { tagName: "audio" },
        style: { display: "none" },
        attributes: {
            preload: "metadata",
        },
    });

    private readonly playWrapper = createElementWithProperties({
        element: { tagName: "div" },
        css: /* tw */ "flex items-center justify-center relative flex-wrap h-[--ap-icon-size] overflow-hidden",
    });

    private readonly playButton = createElementWithProperties({
        element: { tagName: "button" },
        css: /* tw */ `h-full p-[calc(var(--ap-icon-size)/4)] before:block before:bg-gray-100 before:h-full before:aspect-square before:[mask-repeat:no-repeat] before:[mask-position:center] before:[mask-size:contain] ${AudioPlayer.playIconTwClass}`,
    });
    private readonly audioTitle = createElementWithProperties({
        element: { tagName: "div" },
        css: /* tw */ "bg-gray-950 mx-auto text-white text-sm font-crimson-text italic min-w-[--ap-icon-size]",
    });

    private readonly playRangeWrapper = createElementWithProperties({
        element: { tagName: "div" },
        css: /* tw */ "relative w-full min-h-[calc(var(--ap-tracker-height)*3)] mx-auto flex flex-col justify-center items-stretch group",
        style: {
            "--ap-tracker-height": "0.3rem",
            "--ap-tracker-marker-size": "calc(var(--ap-tracker-height)*2)",
        },
    });

    private readonly playRangeBar = createElementWithProperties({
        element: { tagName: "div" },
        css: /* tw */ "w-full h-[--ap-tracker-height] bg-gray-400 cursor-pointer ",
    });

    private readonly playRangeFill = createElementWithProperties({
        element: { tagName: "div" },
        css: /* tw */ "w-full h-[calc(var(--ap-tracker-height)-2px)] translate-y-px bg-gray-200 group-hover:bg-white group-active:bg-white transform-gpu origin-left scale-x-[var(--ap-progress-percentage,0)] transition-transform ease-linear transition-[background-color]",
    });
    private readonly playRangeMarkerWrapper = createElementWithProperties({
        element: { tagName: "div" },
        css: /* tw */ "absolute inset-0 translate-x-[calc(var(--ap-progress-percentage,0)*100%)] transform-gpu transition-transform ease-linear ",
    });

    private readonly playRangeMarker = createElementWithProperties({
        element: { tagName: "div" },
        css: /* tw */ "absolute top-1/2 left-0 bg-gray-200/60 border border-gray-200 h-[--ap-tracker-marker-size] w-[--ap-tracker-height] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity group-active:opacity-100",
    });

    /**
     * root wrapper (this)
     *   - playWrapper
     *       - playButton
     *       - audioTitle
     *   - playRangeWrapper
     *       - playRangeBar
     *          - playRangeFill
     *       - playRangeMarkerWrapper
     *          - playRangeMarker
     *
     *   - audioElement
     */

    constructor() {
        super();

        // root wrapper
        this.classList.add(
            "inline-block",
            "relative",
            "flex",
            "flex-col",
            "justify-start",
            "rounded-sm",
            "items-stretch",
            "w-full",
            "min-w-[--ap-icon-size]",
            "max-w-72",
            "bg-gray-950",
        );
        this.style.setProperty("--ap-root-padding-x", "0.5rem");
        this.style.setProperty("--ap-icon-size", "3.5rem");

        // play button
        this.playButton.addEventListener("click", () => {
            if (this.audioElement.paused) {
                this.audioElement
                    .play()
                    .then(() => {
                        this.playButton.classList.replace(AudioPlayer.playIconTwClass, AudioPlayer.pauseIconTwClass);
                    })
                    .catch((err) => console.error(err));
            } else {
                this.audioElement.pause();
                this.playButton.classList.replace(AudioPlayer.pauseIconTwClass, AudioPlayer.playIconTwClass);
            }
        });

        this.playWrapper.append(this.playButton);
        this.playWrapper.append(this.audioTitle);
        this.append(this.playWrapper);

        this.playRangeMarkerWrapper.append(this.playRangeMarker);
        this.playRangeBar.append(this.playRangeMarkerWrapper);
        this.playRangeBar.append(this.playRangeFill);
        this.playRangeWrapper.append(this.playRangeBar);
        this.append(this.playRangeWrapper);

        // hidden audio element
        // this.audioElement.addEventListener("loadeddata", () => {
        // });
        this.audioElement.addEventListener("timeupdate", () => {
            this.playRangeWrapper.style.setProperty(
                "--ap-progress-percentage",
                (this.audioElement.currentTime / this.audioElement.duration).toString(),
            );
        });
        this.append(this.audioElement);
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
