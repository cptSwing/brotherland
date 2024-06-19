// @ts-ignore
import SimpleLightbox from "simplelightbox";
import { getCookie, setCookie } from "./cookies.js";
import transl_EN from "../lang/en.json";

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

// Set Cookies on load:
if (window) {
    window.getCookie = getCookie;

    console.log(window);
}

if (!document.cookie) {
    setCookie("lang", "DE");
}

const languageSwitchElement = document.getElementById("languageSwitch");

// Switch Button's text
window.addEventListener("load", () => {
    const lang = getCookie("lang");
    console.log(lang);
    if (lang === "DE") {
        languageSwitchElement.innerText = "English";
    } else {
        languageSwitchElement.innerText = "Deutsch";
    }

    console.log("Loaded!", lang);
});

languageSwitchElement.addEventListener("click", () => {
    if (languageSwitchElement.innerText === "English") {
        languageSwitchElement.innerText = "Deutsch";
        setCookie("lang", "EN");
        translateAll(); // WARN can't access original content in html file (..? or new ajax fetch?), so only DE -> EN. Rather trigger reload?
    } else {
        languageSwitchElement.innerText = "English";
        setCookie("lang", "DE");
    }
});

// Internationalization Code, roughly based on https://phrase.com/blog/posts/step-step-guide-javascript-localization

document.addEventListener("DOMContentLoaded", () => {
    const lang = getCookie("lang");
    console.log("%c[script]", "color: #920c0f", `DOMContentLoaded - lang :`, lang);

    if (lang === "EN") {
        translateAll();
    }
});

function translateAll() {
    document.querySelectorAll("[data-lang-key]").forEach(translateElement);
}

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
    const key = element.getAttribute("data-lang-key");
    const translation = transl_EN[key];
    element.innerHTML = translation;
}
