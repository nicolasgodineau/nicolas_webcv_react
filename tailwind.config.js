/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                blackTheme: "#1f1f1f",
                text: "#999999",
                blueCallToAction: "#28e98c",
            },
        },
    },
    plugins: [],
};
