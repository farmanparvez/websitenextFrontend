/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
        csBG: "#333652",
        csBGSmoke: "#F8F8F8",
        csYellow: "#FAD02C",
        csLight: " #F8F8F8",
        "csTextColor-1": " #313131",
        "csTextColor-2": " #616161",
        "csTextColor-3": "#4599F3",
        "csTextColor-4": "#838383",
        "csTextColor-5": "#333652",
        "csTextColor-6": "#6C6E6E",
        "csTextColor-7": "#FAA300",
        "csTextColor-8": "#33BA28",
        "csTextColor-9": "#555875",
        "csTextColor-10": "#4F4F4F",
        "csBG-Gradent":
          "linear-gradient(92.54deg, #333652 17.15%, #5E5151 33.5%, #856F4F 48.85%, #AB8E49 63.21%, #D2AE3F 77.57%, #FAD02C 90.92%)",
        "csBG-Gradent-1":
          "linear-gradient(312.69deg, #333652 45.43%, #1C289A 100%)",
      },
      boxShadow: {
        "logo-bxs": "0px 0px 3px #FFFFFF",
        "header-bottom-line": "1px 1px 4px 1px rgba(255, 255, 255, 0.5)",
        "service-card-boxShadow": "0px 0px 8px #FAD02C",
        "presciption-container-boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "presciption-card-boxShadow": "2px 8px 24px rgba(0, 0, 0, 0.25)",
        "sigin-card-boxShadow": " 0px 0px 16px rgba(0, 0, 0, 0.5)",
      },
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        24: "24px",
        32: "32px",
        36: "36px",
        40: "40px",
        48: "48px",
      },
      fontFamily: {
        sans: ["Lato", "sans"], // after you font, add some fonts separated by commas to handle fallback.
      },
    },
  },
  plugins: [],
}