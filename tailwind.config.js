module.exports = {
   purge: [],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         // new custom colours
         colors: {
            primary: "#FF6363",
            secondary: {
               100: "#E2E2D5",
               200: "#888883",
            },
         },
         fontFamily: {
            custom_font: ["Nunito"],
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
