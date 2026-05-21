import createElementWithProperties from "./createElementWithProperties";

class AudioPlayer extends HTMLElement {
    static observedAttributes = ["source", "title"] as const;

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
        css: /* tw */ "flex items-stretch justify-between size-full",
    });

    private readonly playButton = createElementWithProperties({
        element: { tagName: "button" },
        css: /* tw */ "min-w-16 aspect-square before:block before:size-full before:[mask-repeat:no-repeat] before:[mask-position:left] before:[mask-size:contain] before:[mask-image:url('../../public/images/triangle.svg')] before:bg-gray-100 ml-[--ap-tracker-height] px-px py-3",
    });
    private readonly playRangeWrapper = createElementWithProperties({
        element: { tagName: "div" },
        css: /* tw */ "relative w-[calc(100%-var(--ap-tracker-marker-size))] min-h-8 mx-auto flex flex-col justify-center items-stretch group",
        // "before:absolute",
        // "before:top-1/2",
        // "before:bg-purple-500",
        // "before:w-full",
        // "before:h-2",
        // "before:left-0",
        // "before:-translate-y-1",
        // "before:rounded-sm",
        style: {
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
        css: /* tw */ "absolute top-1/2 left-0 bg-gray-200/60 border border-gray-200 rounded-full size-[--ap-tracker-marker-size] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity group-active:opacity-100",
    });

    private readonly audioTitle = createElementWithProperties({
        element: { tagName: "div" },
        css: /* tw */ "bg-gray-950 w-full shrink text-white text-center text-sm font-crimson-text italic",
    });

    constructor() {
        super();

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

        // root wrapper
        this.classList.add(
            "inline-block",
            "relative",
            "flex",
            "flex-col",
            "justify-start",
            "rounded-sm",
            "items-stretch",
            "w-56",
            "bg-gray-950",
        );
        this.style.setProperty("--ap-tracker-height", "0.3rem");

        // play button
        this.playButton.addEventListener("click", () => {
            if (this.audioElement.paused) {
                this.audioElement
                    .play()
                    .then(() => {
                        this.playButton.classList.replace(
                            "before:[mask-image:url('../../public/images/triangle.svg')]",
                            "before:[mask-image:url('../../public/images/twoRects.svg')]",
                        );
                    })
                    .catch((err) => console.error(err));
            } else {
                this.audioElement.pause();
                this.playButton.classList.replace(
                    "before:[mask-image:url('../../public/images/twoRects.svg')]",
                    "before:[mask-image:url('../../public/images/triangle.svg')]",
                );
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
