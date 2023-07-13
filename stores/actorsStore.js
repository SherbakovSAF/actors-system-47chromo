import { defineStore } from "pinia";

export const useActorsStore = defineStore("actorsStore", {
    state: () => {
        return {
            actors: [
                {
                    nickName: "Pupel",
                    skin: null,
                    totalPoints: 2000,
                    dateEntryMilliseconds: 1442696400000,
                    level: 9,
                    awards: [],
                    isMain: false
                },
                {
                    nickName: "Kenny",
                    skin: null,
                    totalPoints: 423,
                    dateEntryMilliseconds: 1566162000000,
                    level: 8,
                    awards: [],
                    isMain: true
                },
                {
                    nickName: "Devil",
                    skin: null,
                    totalPoints: 210,
                    dateEntryMilliseconds: 1662757200000,
                    level: 7,
                    awards: [],
                    isMain: true
                }
            ]
        };
    },
});