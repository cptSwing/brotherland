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

// Set Cookies:
if (!document.cookie) {
    setCookie("lang", "DE");
}

// store originals, translate
document.addEventListener("DOMContentLoaded", () => {
    allLangElements = document.querySelectorAll(`[${dataAttributeName}]`);
    allLangElements.forEach((elem) => {
        const dataValue = elem.getAttribute(dataAttributeName);
        originalInnerHTML[dataValue] = elem.innerHTML;
    }); // Save original - DE - innerHTML

    translateAll(allLangElements);
});

// Click handler language switch button
document.getElementById("languageSwitch").addEventListener("click", () => {
    const lang = getCookie("lang");

    if (lang !== "EN") {
        setCookie("lang", "EN");
    } else {
        setCookie("lang", "DE");
    }

    translateAll(allLangElements);
});

// Click handler language switch button Mobile!
document.getElementById("languageSwitchMobile").addEventListener("click", () => {
    const lang = getCookie("lang");

    if (lang !== "EN") {
        setCookie("lang", "EN");
    } else {
        setCookie("lang", "DE");
    }

    translateAll(allLangElements);
});

function translateAll(elements) {
    const lang = getCookie("lang");

    // Replace "bobbels" per language
    const stylesheetRules = [...document.styleSheets[0].cssRules];
    const cursorVeMd = stylesheetRules.find((rule) => rule.cssText.includes(".md\\:cursor-ve:hover"));
    const cursorVePrev = stylesheetRules.find((rule) => rule.selectorText === ".cursor-ve-prev:hover");
    const cursorVeNext = stylesheetRules.find((rule) => rule.selectorText === ".cursor-ve-next:hover");

    if (lang === "EN") {
        cursorVeMd.cssRules[0].style.setProperty("cursor", 'url("/public/images/virtAusstCursor_EN.png") 64 64, auto');
        cursorVePrev.style.setProperty("cursor", 'url("/public/images/virtAusstCursor_prev_EN.png") 64 64, auto');
        cursorVeNext.style.setProperty("cursor", 'url("/public/images/virtAusstCursor_next_EN.png") 64 64, auto');
    } else {
        cursorVeMd.cssRules[0].style.setProperty("cursor", 'url("/public/images/virtAusstCursor.png") 64 64, auto');
        cursorVePrev.style.setProperty("cursor", 'url("/public/images/virtAusstCursor_prev.png") 64 64, auto');
        cursorVeNext.style.setProperty("cursor", 'url("/public/images/virtAusstCursor_next.png") 64 64, auto');
    }

    elements.forEach((elem) => {
        const key = elem.getAttribute(dataAttributeName);

        if (lang === "EN") {
            translateElement(elem, key, transl_EN);
        } else {
            Object.keys(originalInnerHTML).length && translateElement(elem, key, originalInnerHTML);
        }
    });
}

// Replace the inner text of the given HTML element with the translation in the active locale, corresponding to the element's data-lang-key
function translateElement(element, key, translations) {
    const translation = translations[key];
    element.innerHTML = translation;
}
