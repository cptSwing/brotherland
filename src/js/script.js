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

// Internationalization Code, roughly based on https://phrase.com/blog/posts/step-step-guide-javascript-localization

const dataAttributeName = "data-lang-key";
const originalInnerHTML = {};
let allLangElements;

// Set Cookies on load:
if (!document.cookie) {
    setCookie("lang", "DE");
}

const languageSwitchElement = document.getElementById("languageSwitch");
languageSwitchElement.addEventListener("click", () => {
    const lang = getCookie("lang");
    let newLang;

    if (lang !== "EN") {
        setCookie("lang", "EN");
        newLang = "EN";
    } else {
        setCookie("lang", "DE");
        newLang = "DE";
    }

    console.log("%c[script]", "color: #ef6c7d", `CLICK newLang :`, newLang);
    translateAll(allLangElements);
});

document.addEventListener("DOMContentLoaded", () => {
    allLangElements = document.querySelectorAll(`[${dataAttributeName}]`);
    console.log("%c[script]", "color: #700272", `allLangElements :`, allLangElements);
    allLangElements.forEach((elem) => (originalInnerHTML[elem.getAttribute(dataAttributeName)] = elem.innerHTML)); // Save original - DE - innerHTML

    translateAll(allLangElements);
});

function translateAll(elements) {
    const lang = getCookie("lang");

    elements.forEach((elem) => {
        const key = elem.getAttribute(dataAttributeName);

        if (lang === "EN") {
            translateElement(elem, key, transl_EN);
        } else {
            Object.keys(originalInnerHTML).length && translateElement(elem, key, originalInnerHTML);
        }
    });
}

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element, key, translDb) {
    const translation = translDb[key];
    element.innerHTML = translation;
}
