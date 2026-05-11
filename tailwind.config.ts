import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // This creates that clean, modern look
            colors: {
                background: "#FAFAFA",
                foreground: "#1A1A1A",
            },
        },
    },
    plugins: [],
};
export default config;