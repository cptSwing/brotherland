// @ts-ignore
import SimpleLightbox from "simplelightbox";

exhibitGalleryOnLoad();

function exhibitGalleryOnLoad() {
    const gallery = new SimpleLightbox("#simplelightboxgallery a", {
        animationSpeed: 100,
        animationSlide: false,
        fadeSpeed: 0,
        uniqueImages: false,
        overlayOpacity: 1.0,
        swipeClose: false,
        scrollZoom: false,
        captionClass: /* tw */ "!text-sm !font-crimson-text !bg-black/50",
    });

    // @ts-ignore
    gallery.on("shown.simplelightbox", function () {
        const galleryGrid = document.getElementById("simplelightboxgallery");
        const hamburgerLabel = document.getElementById("hamburger-menu-label");

        galleryGrid?.classList.add("pointer-events-none");
        hamburgerLabel?.classList.add("pointer-events-none");
    });

    // @ts-ignore
    gallery.on("closed.simplelightbox", function () {
        const galleryGrid = document.getElementById("simplelightboxgallery");
        const hamburgerLabel = document.getElementById("hamburger-menu-label");

        setTimeout(() => {
            galleryGrid?.classList.remove("pointer-events-none");
            hamburgerLabel?.classList.remove("pointer-events-none");
        }, 500);
    });
}
