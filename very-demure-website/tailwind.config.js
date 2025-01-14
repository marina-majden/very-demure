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
            light: "#EEEFF2",
            accentLight: "#94A3B5",
            brand: "#7C6098",
            accent: "#42B195",
            dark: "#292E3F",
            black: "#202E3F",
        },
        extend: {
            boxShadow: {
                blueShadow: "0px 0px 20px 0px rgba(34, 10, 70, 0.6)",
                blueMediumShadow: "10px 10px 200px 150px rgba(34, 10, 80, 0.8)",
                pinkMediumShadow:
                    "10px 10px 200px 150px rgba(350, 100, 160, 0.5)",
            },
        },
        fontFamily: {
            body: ["Roboto Flex"],
            special: ["Bellota"],
            accent: ["Urbanist"],
        },
    },

    plugins: [],
};
