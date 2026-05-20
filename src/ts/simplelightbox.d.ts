declare module "simplelightbox" {
    interface SimpleLightbox {
        new (element: string, options?: SimpleLightboxOptions): SimpleLightbox;

        on: (slEvent: string, slCallback: () => void) => void;
        destroy(): void;
    }
    interface SimpleLightboxOptions {
        captionPosition?: string;
        captionsData?: string;
        animationSpeed?: number;
        animationSlide?: boolean;
        fadeSpeed?: number;
        uniqueImages?: boolean;
        overlayOpacity?: number;
        swipeClose?: boolean;
        scrollZoom?: boolean;
        captionClass?: string;
    }
    const SimpleLightbox: SimpleLightbox;
    export = SimpleLightbox;
}
