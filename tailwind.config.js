/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                brand: {
                    purple: {
                        500: '#9b51e0',
                    },
                    red: {
                        400: '#fb6962',
                        500: '#cf2e2e',
                        600: '#9d0208',
                        700: '#6a040f',
                    },
                    pink: {
                        500: '#f78da7',
                    },
                    orange: {
                        300: '#fb6962',
                        500: '#ff6900',
                    },
                    yellow: {
                        200: '#fef84c',
                        400: '#ead43a',
                        500: '#e9cf37',
                        600: '#fcb900',
                    },
                    blue: {
                        300: '#0693e3',
                        400: '#2874fc',
                        500: '#1741a3',
                        600: '#0a2b7a',
                    },
                    green: {
                        300: '#7bdcb5',
                        500: '#00d084',
                    },
                    gray: {
                        300: '#abb8c3',
                        700: '#495057',
                        800: '#212529',
                    },
                },
            },
            // borderRadius: {
            //     md: '4px',
            // },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
        },
    },
    // plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
