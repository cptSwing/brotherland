import { getCookie, setCookie } from "./cookies.ts";
import transl_EN_Json from "../lang/en.json";

// Internationalization Code, roughly based on https://phrase.com/blog/posts/step-step-guide-javascript-localization

const defaultLanguage = "DE";
const languageDataAttributeName = "data-lang-key";
const transl_EN = transl_EN_Json as Record<string, string>;
let allTranslatableElements: NodeListOf<HTMLElement> | null = null;
let allDefaultLanguageTokens: Record<string, string> | null = null;

document.addEventListener("DOMContentLoaded", () => {
    if (!document.cookie) {
        setCookie("lang", defaultLanguage);
    }
    const currentLanguage = getCookie("lang") ?? defaultLanguage;
    if (currentLanguage !== defaultLanguage) {
        translateAll({ lang: "EN", translations: transl_EN });
    }
});

// Click handler language switch button
document.getElementById("languageSwitch")?.addEventListener("click", languageSwitchClickHandler);
document.getElementById("languageSwitchMobile")?.addEventListener("click", languageSwitchClickHandler);

function languageSwitchClickHandler() {
    const currentLanguage = getCookie("lang") ?? defaultLanguage;
    if (currentLanguage !== defaultLanguage) {
        setCookie("lang", defaultLanguage);
        translateAll({ lang: defaultLanguage });
    } else {
        setCookie("lang", "EN");
        translateAll({ lang: "EN", translations: transl_EN });
    }
}

type TranslateArgs =
    | {
          lang: "DE";
      }
    | {
          lang: "EN";
          translations: Record<string, string>;
      };

function translateAll(args: TranslateArgs) {
    if (!allTranslatableElements || !allDefaultLanguageTokens) {
        [allTranslatableElements, allDefaultLanguageTokens] = getLangElements();
    }

    let translationTokens = allDefaultLanguageTokens!;
    replaceBobbels(args.lang);

    // Hide / show transcription button in audio player:
    if (args.lang === defaultLanguage) {
        document.documentElement.style.setProperty("--transcription-display", "none");
    } else {
        translationTokens = args.translations;
        document.documentElement.style.removeProperty("--transcription-display");
    }

    allTranslatableElements!.forEach((elem) => {
        const key = elem.getAttribute(languageDataAttributeName);
        if (key) {
            elem.innerHTML = translationTokens[key];
        }
    });
}

function getLangElements() {
    const translatableElements = document.querySelectorAll<HTMLElement>(`[${languageDataAttributeName}]`);
    const defaultLanguageTokens: typeof allDefaultLanguageTokens = {};

    // Save original - DE - innerHTML
    translatableElements.forEach((elem) => {
        const tokenKey = elem.getAttribute(languageDataAttributeName);
        if (tokenKey) {
            defaultLanguageTokens[tokenKey] = elem.innerHTML;
        }
    });

    return [translatableElements, defaultLanguageTokens] as [typeof allTranslatableElements, typeof allDefaultLanguageTokens];
}

const cursorVeUrl = new URL("/public/images/virtAusstCursor.png", import.meta.url);
const cursorVeEnUrl = new URL("/public/images/virtAusstCursor_EN.png", import.meta.url);
const cursorVePrevUrl = new URL("/public/images/virtAusstCursor_prev.png", import.meta.url);
const cursorVePrevEnUrl = new URL("/public/images/virtAusstCursor_prev_EN.png", import.meta.url);
const cursorVeNextUrl = new URL("/public/images/virtAusstCursor_next.png", import.meta.url);
const cursorVeNextEnUrl = new URL("/public/images/virtAusstCursor_next_EN.png", import.meta.url);

function replaceBobbels(lang: string) {
    // Replace "bobbels" per language
    const ruleList = document.styleSheets[0].cssRules;

    let cursorVeMd, cursorVePrev, cursorVeNext;
    for (const rule of ruleList) {
        if (rule instanceof CSSMediaRule && rule.cssText.includes(".md\\:cursor-ve:hover")) {
            cursorVeMd = rule;
        }
        if (rule instanceof CSSStyleRule) {
            if (rule.selectorText === ".cursor-ve-prev:hover") {
                cursorVePrev = rule;
            } else if (rule.selectorText === ".cursor-ve-next:hover") {
                cursorVeNext = rule;
            }
        }
    }

    if (lang === "EN") {
        (cursorVeMd?.cssRules[0] as CSSStyleRule).style.setProperty("cursor", `url(${cursorVeEnUrl}) 64 64, auto`);
        cursorVePrev?.style.setProperty("cursor", `url(${cursorVePrevEnUrl}) 64 64, auto`);
        cursorVeNext?.style.setProperty("cursor", `url(${cursorVeNextEnUrl}) 64 64, auto`);
    } else {
        (cursorVeMd?.cssRules[0] as CSSStyleRule).style.setProperty("cursor", `url(${cursorVeUrl}) 64 64, auto`);
        cursorVePrev?.style.setProperty("cursor", `url(${cursorVePrevUrl}) 64 64, auto`);
        cursorVeNext?.style.setProperty("cursor", `url(${cursorVeNextUrl}) 64 64, auto`);
    }
}
