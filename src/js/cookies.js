// returns the cookie with the given name,
// or undefined if not found
export function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, attributes = {}) {
    attributes = {
        path: "/",
        // add other defaults here if necessary
        ...attributes,
    };

    if (attributes.expires instanceof Date) {
        attributes.expires = attributes.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let attributeKey in attributes) {
        updatedCookie += "; " + attributeKey;
        let attributeValue = attributes[attributeKey];
        if (attributeValue !== true) {
            updatedCookie += "=" + attributeValue;
        }
    }

    document.cookie = updatedCookie;
}
