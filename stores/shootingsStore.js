import { defineStore } from "pinia";

export const useShootingsStore = defineStore("shootingsStore", {
    state: () => {
        return {
            shootings: [
                {
                    name: "Батя Командир",
                    date: "28.06.2023",
                    timeMinute: 150,
                    pageCount: 4,
                    actors: [
                        {
                            nickName: "Kenny",
                            numberHours: 3,
                            statusNotification: true,
                        },
                        {
                            nickName: "Devil",
                            numberHours: 3,
                            statusNotification: true,
                        },
                        {
                            nickName: "3light",
                            numberHours: 3,
                            statusNotification: true,
                        },
                        {
                            nickName: "Rick Sanchez",
                            numberHours: 0,
                            statusNotification: false,
                        },
                        {
                            nickName: "Andrew Shon",
                            numberHours: 0,
                            statusNotification: false,
                        },
                        {
                            nickName: "Dima Etenko",
                            numberHours: 0,
                            statusNotification: true,
                        },
                        {
                            nickName: "Prihozu",
                            numberHours: 0,
                            statusNotification: false,
                        },
                        {
                            nickName: "Salinder Lazin",
                            numberHours: 0,
                            statusNotification: false,
                        },
                        {
                            nickName: "talant",
                            numberHours: 0,
                            statusNotification: false,
                        },
                        {
                            nickName: "Bogdan Solomon",
                            numberHours: 3,
                            statusNotification: true,
                        },
                        {
                            nickName: "Pekhlt",
                            numberHours: 0,
                            statusNotification: false,
                        },
                    ],
                },
                {
                    name: "Вага ЕГЭ",
                    date: "09.06.2023",
                    timeMinute: 150,
                    pageCount: 4,
                    actors: [
                        {
                            nickName: "Kenny",
                            numberHours: 3,
                            statusNotification: true,
                        },
                        {
                            nickName: "Devil",
                            numberHours: 3,
                            statusNotification: true,
                        },
                        {
                            nickName: "3light",
                            numberHours: 0,
                            statusNotification: true,
                        },
                        {
                            nickName: "Rick Sanchez",
                            numberHours: 0,
                            statusNotification: false,
                        },
                        {
                            nickName: "Andrew Shon",
                            numberHours: 3,
                            statusNotification: false,
                        },
                        {
                            nickName: "Dima Etenko",
                            numberHours: 0,
                            statusNotification: true,
                        },
                        {
                            nickName: "Prihozu",
                            numberHours: 0,
                            statusNotification: true,
                        },
                        {
                            nickName: "Salinder Lazin",
                            numberHours: 3,
                            statusNotification: true,
                        },
                        {
                            nickName: "talant",
                            numberHours: 0,
                            statusNotification: false,
                        },
                        {
                            nickName: "Bogdan Solomon",
                            numberHours: 9,
                            statusNotification: false,
                        },
                        {
                            nickName: "Pekhlt",
                            numberHours: 0,
                            statusNotification: false,
                        },
                    ],
                },
                {
                    name: "Вага ЕГЭ",
                    date: "09.06.2023",
                    timeMinute: 150,
                    pageCount: 4,
                    actors: [
                        {
                            nickName: "Kenny",
                            numberHours: 3,
                            statusNotification: true,
                        },
                        {
                            nickName: "Devil",
                            numberHours: 3,
                            statusNotification: true,
                        },
                        {
                            nickName: "3light",
                            numberHours: 0,
                            statusNotification: true,
                        },
                        {
                            nickName: "Rick Sanchez",
                            numberHours: 0,
                            statusNotification: false,
                        },
                        {
                            nickName: "Andrew Shon",
                            numberHours: 3,
                            statusNotification: false,
                        },
                        {
                            nickName: "Dima Etenko",
                            numberHours: 0,
                            statusNotification: true,
                        },
                        {
                            nickName: "Prihozu",
                            numberHours: 0,
                            statusNotification: true,
                        },
                        {
                            nickName: "Salinder Lazin",
                            numberHours: 3,
                            statusNotification: true,
                        },
                        {
                            nickName: "talant",
                            numberHours: 0,
                            statusNotification: false,
                        },
                        {
                            nickName: "Bogdan Solomon",
                            numberHours: 9,
                            statusNotification: false,
                        },
                        {
                            nickName: "Pekhlt",
                            numberHours: 0,
                            statusNotification: false,
                        },
                    ],
                },
            ],
        };
    },
});
