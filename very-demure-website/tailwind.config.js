/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            "sm": "350px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px",
        },
        colors: {
            light: "#E0DED3",
            neutral: "#A9ACAF",
            brand: "#61706B",
            accent: "#B37239",
            dark: "#241F24",
        },
        extend: {
            boxShadow: {
                lightShadow: "2px 2px 10px 5px rgba(224, 222, 211, 0.6)",
                darkShadow: "2px 2px 10px 5px rgba(36, 31, 36, 0.6)",
                brandShadow: "2px 2px 10px 5px rgba(179, 114, 57, 0.6)",
                bigShadow: "10px 10px 200px 150px rgba(179, 114, 57, 0.8)",
            },
        },
        fontFamily: {
            body: "Pavanam",
            special: "Bodoni Moda",
            sans: "Roboto Flex",
        },
    },

    plugins: [],
};
