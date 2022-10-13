/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "/public/index.html"],
  theme: {
    screens: {
      // specifying screens is mandatory in every tailwind.config file
      xss: "320px",
      xd: "375px",
      xs: "480px", //min-width 480px
      sm: "640px",
      md: "768px",
      xmd: "820px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1680px",
      "4xl": "1921px",
      // Exact Breakpoints
      mobile: {
        min: "320px",
        max: "767px",
      },
      tab: {
        min: "768px",
        max: "1023px",
      },
    },
    colors: {
      transparent: "transparent",
      white: {
        50: "#F8FBFF",
        100: "#FFFFFF",
        150: "#CEBCFF",
        200: "#EAEAEA",
      },
      slate: {
        50: "#488FEB00",
        100: "#F2FAFF",
        150: "#e2e8f0",
      },
      offWhite: {
        50: "#FFFFFFE6",
        100: "#00000021",
      },
      black: {
        50: "#4E4E4E",
        100: "#000000",
        150: "#00000095",
        200: "#484848",
      },
      purple: {
        50: "#502D9A",
        100: "#6B3BC9",
        150: "#512C99",
        200: "#A87BFF",
        250: "#7C58CB",
        300: "#6D4ABC",
        350: "#5A38A5",
      },
      blue: {
        50: "#72C4F4",
        100: "#CFEDFF",
        150: "#566DDD",
        200: "#236ECB",
        250: "#3828BE",
        300: "#6A4FC3",
        350: "#AFE1FF",
        400: "#3828be5c",
      },
      green: "#23BA95",
      grey: {
        50: "#EDF1F7",
        100: "#EAEAEA",
      },
      darkGrey: {
        50: "#8E8E8E",
        100: "#D1D1D1",
      },
      lightGreen: "#CAF5EF",
    },

    fontSize: {
      // `[fontSize, { letterSpacing, lineHeight }]`

      ft1: [
        "12px",
        {
          //Poppins Regular
          letterSpacing: "0em",
          lineHeight: "18px",
        },
      ],
      ft2: [
        "13px",
        {
          //Poppins Regular
          letterSpacing: "0em",
          lineHeight: "20px",
        },
      ],
      ft3: [
        "14px",
        {
          letterSpacing: "0em",
          lineHeight: "21px",
        },
      ],
      ft4: [
        "15px",
        {
          letterSpacing: "0em",
          lineHeight: "23px",
        },
      ],
      ft5: [
        "16px",
        {
          letterSpacing: "0em",
          lineHeight: "25px",
        },
      ],
      ft6: [
        "18px",
        {
          letterSpacing: "0em",
          lineHeight: "27px",
        },
      ],
      ft7: [
        "19px",
        {
          letterSpacing: "0em",
          lineHeight: "29px",
        },
      ],
      ft8: [
        "20px",
        {
          letterSpacing: "0em",
          lineHeight: "30px",
        },
      ],
      ft9: [
        "23px",
        {
          letterSpacing: "0em",
          lineHeight: "34px",
        },
      ],
      ft10: [
        "24px",
        {
          letterSpacing: "0em",
          lineHeight: "32px",
        },
      ],
      ft11: [
        "28px",
        {
          letterSpacing: "0em",
          lineHeight: "50px",
        },
      ],
      ft11: [
        "32px",
        {
          letterSpacing: "0em",
          lineHeight: "48px",
        },
      ],
      ft12: [
        "36px",
        {
          //H3
          letterSpacing: "0em",
          lineHeight: "50px",
        },
      ],
      ft13: [
        "46px",
        {
          letterSpacing: "0em",
          lineHeight: "69px",
        },
      ],
      ft14: [
        "50px",
        {
          letterSpacing: "0em",
          lineHeight: "76px",
        },
      ],
      ft15: [
        "20px",
        {
          letterSpacing: "0em",
          lineHeight: "50px",
        },
      ],
      ft16: [
        "16px",
        {
          letterSpacing: "0em",
          lineHeight: "50px",
        },
      ],
      ft17: [
        "24px",
        {
          letterSpacing: "0em",
          lineHeight: "50px",
        },
      ],
      ft18: [
        "15px",
        {
          letterSpacing: "0em",
          lineHeight: "28px",
        },
      ],
      ft18: [
        "17px",
        {
          letterSpacing: "0em",
          lineHeight: "26px",
        },
      ],
    },

    fontFamily: {
      PoppinsBold: ["Poppins-Bold", "sans-serif"],
      PoppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
      PoppinsRegular: ["Poppins-Regular", "sans-serif"],
      PoppinsMedium: ["Poppins-Medium", "sans-serif"],
    },

    extend: {
      //theme options are to be extended with custom variants and not overridden (1 unit = 4px)
      spacing: {
        //common for width, height, padding, margin
        "2px": "2px",
        "6px": "6px",
        "7px": "7px",
        "9px": "9px",
        2.5: "10px",
        "14px": "14px",
        "15px": "15px",
        "17px": "17px",
        4.5: "18px",
        "21px": "21px",
        "23px": "23px",
        "26px": "26px",
        "27px": "27px",
        "29px": "29px",
        "30px": "30px",
        "31px": "31px",
        "33px": "33px",
        8.5: "34px",
        9: "36px",
        "38px": "38px",
        "37px": "37px",
        "41px": "41px",
        "42px": "42px",
        11: "44px",
        "45px": "45px",
        11.5: "46px",
        "47px": "47px",
        "49px": "49px",
        "50px": "50px",
        13: "52px",
        15: "60px",
        "65px": "65px",
        "67px": "67px",
        "68px": "68px",
        "69px": "69px",
        "74px": "74px",
        "77px": "77px",
        "78px": "78px",
        "82px": "82px",
        21: "84px",
        "85px": "85px",
        21.5: "86px",
        "90px": "90px",
        24.5: "98px",
        24.5: "98px",
        25: "100px",
        "101px": "101px",
        "114px": "114px",
        "115px": "115px",
        29: "116px",
        31: "124px",
        32.5: "130px",
        35: "140px",
        36.5: "146px",
        "157px": "157px",
        "159px": "159px",
        "161px": "161px",
        45: "180px",
        "183px": "183px",
        48.5: "194px",
        50: "200px",
        52.5: "210px",
        "213px": "213px",
        57.5: "230px",
        59.5: "238px",
        61: "244px",
        62.5: "250px",
        65: "260px",
        67: "268px",
        71.5: "286px",
        74.5: "298px",
        75: "300px",
        "303px": "303px",
        "307px": "307px",
        "319px": "319px",
        83: "332px",
        "343px": "343px",
        "347px": "347px",
        84.5: "338px",
        87.5: "350px",
        90: "360px",
        92.5: "370px",
        "371px": "371px",
        98: "392px",
        99: "396px",
        "403px": "403px",
        105: "423px",
        "433px": "433px",
        "447px": "447px",
        "450px": "450px",
        "454px": "454px",
        "466px": "466px",
        "485px": "485px",
        "500px": "500px",
        "513px": "513px",
        130: "520px",
        139: "566px",
        140: "560px",
        142.5: "570px",
        148: "593px",
        "607px": "607px",
        160: "640px",
        165.5: "662px",
        171: "685px",
        "693px": "693px",
        275: "1100px",
        295: "1180px",
        "1196px": "1196px",
        "721px": "721px",
        "733px": "733px",
        "3per": "3.5%",
        "10per": "10%",
        "15per": "15%",
        "30per": "30%",
        "35per": "35%",
        "40per": "40%",
        "45per": "45%",
        "50per": "50%",
        "60per": "60%",
        "100per": "100%",
        "80vh": "80vh",
      },
      borderWidth: {},
      borderRadius: {
        //same as border width
        "10px": "10px",
        "18px": "18px",
        "19px": "19px",
      },
      backgroundImage: (theme) => ({
        banner: "url('/images/bannerBg.png')", //tailwind class => bg-dummy
      }),
    },
    boxShadow: {
      // none: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      xs: "0  3px 10px rgba(0, 0, 0, 0.02)",
      medium: "0px 3px 6px #0000000D",
    },
    minHeight: {
      "320px": "320px",
      "30per": "30%",
      "33px": "33px",
      "115px": "115px",
      "421px": "421px",
      "67px": "67px",
    },
    minWidth: {
      "138px": "144px",
      "78px": "78px",
      "114px": "114px",
    },

    variants: {
      //there are few css properties which don't support features/events like responsive, hover etc. by default, so to make them supportive for those css properties, we write them down as below
      width: ["responsive", "hover", "focus", "group-hover"],
      display: ["responsive", "hover", "focus", "group-hover"],
      transform: ["responsive", "hover", "focus", "group-hover"],
      scale: ["responsive", "hover", "focus", "group-hover"],
      extend: {
        animation: ["hover", "focus", "group-hover"],
        grayscale: ["hover", "focus", "group-hover"],
      },
    },
    plugins: [],
    // darkMode: false
  },
};
