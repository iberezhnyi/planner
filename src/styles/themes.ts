export const globalStyles = {
  text: {
    fontSize: {
      xxs: "10px",
      xs: "12px",
      s: "0.875rem",
      m: "16px",
      l: "18px",
      xl: "20px",
      xxxl: "24px",
      xxl: "28px",
      bxl: "32px",
      bxxl: "40px",
      bxxxl: "44px",
    },

    fontWeight: "600",
    lineHeight: "normal",
  },

  form: {
    primaryInputColor: "#DCE3E5",
    warningColor: "#FF9966",
  },
}

export const themes = {
  light: {
    ...globalStyles,

    pageBackground: "#DCEBF7",
    primaryBgColor: "#FFFFFF",
    titleColor: "#3E85F3",
    textColor: "#111111",
    tagLineColor: "black",
  },

  dark: {
    ...globalStyles,

    pageBackground: "linear-gradient(to bottom, #000066 0%, #000033 100%)",
    primaryBgColor: "#35363A",
    titleColor: "#3E85F3",
    textColor: "lavender",
    tagLineColor: "lavender",
  },
}

// breakpoint: {
//   mobile: '320px',
//   tablet: '768px',
//   desktop: '1440px',
// },

// +++++++++++++++++++++++++++++++++++++

// const lightTheme = {
//   pageBackground: "white",
//   titleColor: "#dc658b",
//   tagLineColor: "black",
// }

// const darkTheme = {
//   pageBackground: "#282c36",
//   titleColor: "lightpink",
//   tagLineColor: "lavender",
// }

// export const themes = {
//   light: lightTheme,
//   dark: darkTheme,
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++

// const darkBodyColor = "#222"
// const darkTextColor = "#969696"

// const lightBodyColor = "#f6f6f6"
// const lightTextColor = "#111"

// export const darkTheme = {
//   bodyColor: darkBodyColor,
//   textColor: darkTextColor,
// }

// export const lightTheme = {
//   bodyColor: lightBodyColor,
//   textColor: lightTextColor,
// }

// +++++++++++++++++++++++++++++++++++++++++++

// export const theme = {
//   lightTheme: {
//     color: {
//       white: "white",
//       black: "black",
//     },
//   },

//   darkTheme: {
//     color: {
//       white: "white",
//       black: "black",
//     },
//   },
// }
