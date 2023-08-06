import SimpleLightbox from "simplelightbox";

exhibitGalleryOnLoad();

function exhibitGalleryOnLoad() {
    new SimpleLightbox(".gallery a", {
        // sourceAttr: "src",
        animationSpeed: 100,
        fadeSpeed: 0,
        uniqueImages: false,
        overlayOpacity: 1.0,
        // className: "my-auto",
        // captionSelector: "self",
        // captionPosition: "outside",
        captionClass: /* tw */ "!text-sm !font-crimson-text !bg-black/50",
    });
}
