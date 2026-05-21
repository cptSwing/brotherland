// Trying to keep my number of lines in constructor small
function createElementWithProperties<K extends keyof HTMLElementTagNameMap>(
    params: CreateElementWithProperties<K>,
): HTMLElementTagNameMap[K] {
    const { element, style, css, attributes } = params;
    const newElement = document.createElement(element.tagName, element.options);

    if (style) {
        for (const styleProperty in style) {
            newElement.style.setProperty(styleProperty, style[styleProperty]);
        }
    }
    if (attributes) {
        for (const property in attributes) {
            const attrProperty = property as keyof typeof attributes;
            newElement.setAttribute(property, String(attributes[attrProperty]));
        }
    }
    if (css) {
        if (Array.isArray(css)) {
            newElement.classList.add(...css);
        } else {
            // presumably one long string - a regex would be smarter here but alas
            const splitStrings = css
                .split(" ")
                .map((str) => str.trim())
                .filter(Boolean);

            newElement.classList.add(...splitStrings);
        }
    }

    return newElement;
}

export default createElementWithProperties;

/** Types */

type ElementAttributes<K extends keyof HTMLElementTagNameMap> = Omit<
    {
        // remove all sorts of objects, methods
        [P in keyof HTMLElementTagNameMap[K] as HTMLElementTagNameMap[K][P] extends string | number | boolean | null | undefined
            ? P
            : never]?: HTMLElementTagNameMap[K][P];
    },
    // and remove specific getter/setters etc
    "textContent" | "innerHTML" | "outerHTML" | "style"
>;

type CreateElementWithProperties<K extends keyof HTMLElementTagNameMap> = {
    element: {
        tagName: K;
        options?: ElementCreationOptions;
    };
    style?: Record<string, string>;
    css?: string | string[];
    attributes?: ElementAttributes<K>;
};
