import type { Config } from "tailwindcss";
export default <Partial<Config>>{
    theme: {
        fontFamily: {
            montserrat: ["Montserrat"],
        },
        borderRadius: { "big-card": "40px" },
        extend: {
            colors: {
                "main-accent-color": "#A9C189",
                "main-text-color": "#8E8F8C",
            },
            boxShadow: {
                "big-card": "4px 14px 23px 5px rgba(0, 0, 0, 0.15);",
            },
        },
    },
};
