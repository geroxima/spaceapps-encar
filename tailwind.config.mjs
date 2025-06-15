/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                blueYonder: '#2E96F5',
                neonBlue: '#0960E1',
                electricBlue: '#0042A6',
                deepBlue: '#07173F',
                rocketRed: '#E43700',
                martianRed: '#8E1100',
                neonYellow: '#eafe07',
                white: '#FBFFFE',
                black: '#000000',
            },
            fontFamily: {
                firaCode: ['Fira Code', 'monospace'],
                firaSansBlack: ['Fira Sans Black', 'Fira Sans', 'sans-serif'],
                firaSansBold: ['Fira Sans Bold', 'sans-serif'],
                overpass:  ['overpass', 'sans-serif'],
                overpassBold: ['Overpass Bold', 'sans-serif'],
                // overpassRegular: ['Overpass Regular', 'sans-serif'],
            },
        },
    },
    plugins: [],
}