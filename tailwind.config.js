/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],

    theme: {

        colors: {
            white: "#fff",

            red: "#e71515",

            black: "#000",

            transparent: "transparent",

            bgcolor:"#EA6A12",

            bgcolor2: '#EA6A12B2',

            bordercolor:"#d9d4d4",

            horizontal:"#FBE1D0",

            horizontalGray:"#e3e1e1",

            grayfont:"#959895",

            graybg:"#57595BFF",

            mainbg:"#FFF6D8",

            cartBg:"#FFF5EE",

            sideBarIconBg:"#F5F5F5",



        },

        extend: {
            fontFamily: {
                PlayfairDisplay: ['Playfair Display'],
            },
                    },
    },
    plugins: [],
};
