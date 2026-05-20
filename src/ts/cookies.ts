// returns the cookie with the given name,
// or undefined if not found
export function getCookie(name: string) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

interface CookieAttributes {
    expires?: string | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    [otherProperty: string]: unknown;
}
export function setCookie(name: string, value: string, customAttributes?: CookieAttributes) {
    const attributes: Record<string, string> = {
        path: "/",
    };

    for (let customAttributeKey in customAttributes) {
        let value = customAttributes[customAttributeKey];

        if (typeof value !== "string") {
            if (value instanceof Date) {
                value = value.toUTCString();
            } else {
                value = String(value);
            }
        }

        attributes[customAttributeKey] = value as string;
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let attributeKey in attributes) {
        updatedCookie += "; " + attributeKey;
        let attributeValue = attributes[attributeKey];

        // The above takes care of "Secure", or "HttpOnly" for instance. For the rest:
        if (attributeValue !== "true" && attributeValue !== "false") {
            updatedCookie += "=" + attributeValue;
        }
    }

    document.cookie = updatedCookie;
}
