module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"], // add your preferred file extensions here
    theme: {
        extend: {
            fontFamily: {
                "playfair-display": ['"Playfair Display"'],
                glegoo: ["Glegoo"],
                "crimson-text": ['"Crimson Text"'],
                roboto: ["Roboto"],
            },
            aspectRatio: {
                "2/3": "2 / 3",
                "3/2": "3 / 2",
            },
        },
    },
    plugins: [require("tailwindcss-breakpoints-inspector")],
};
