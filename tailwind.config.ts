import type { Config } from "tailwindcss";
export default <Partial<Config>>{
    theme: {
        fontFamily: {
            montserrat: ["Montserrat"],
        },
        borderRadius: { 
            "big-card": "40px",
            'notificationStatus': '15px',
            'full': '100%',
        },
        extend: {
            colors: {
                "main-accent-color": "#A9C189",
                "main-text-color": "#8E8F8C",
                'notificationStatus-CameAndNotified': "#A9C189",
                'notificationStatus-notCameAndNotified': "#C65A5A",
                'notificationStatus-notCameAndNotNotified': "#8093D6",
                'notificationStatus-CameAndNotNotified': "#D7D975",
                'white': '#fff'
            },
            boxShadow: {
                "big-card": "4px 14px 23px 5px rgba(0, 0, 0, 0.15);",
            },
        },
    },
};
