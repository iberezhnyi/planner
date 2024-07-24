import { IThemes } from 'types'

// Тг:
// чорний - #141C27
// світло-чорний - #1D2733   // #232F40
// світло-світло-чорний - #2D373F   // #2C343F
// текст на чорному - #768791
// ховер тексту на чорному - #79C4FD
// іконки на чорному - #7D8D9A // #AAAAAA

// footer -#2C2C2C

export const themes: IThemes = {
  light: {
    // Background
    pageBackground: '#DCEBF7', //#F4F4F5
    primaryBgColor: '#F4F4F5', //
    secondaryBgColor: '#5288C1', //
    headerBgColor: '#5288C1', //
    footerBgColor: '#E5E5E5', // #E5E5E5

    // Text
    textColor: '#000000', //
    textColorSecondary: '#BFE5FF',
    titleColor: '#137BCD',
    footerTextColor: '#707579', // #768791

    // Link
    linkColor: '#137BCD',
    linkActiveColor: '#4CCCFF', //'#4CCCFF'

    // Button
    btnTextColor: '#FFFFFF',
    btnDisabledTextColor: '#707579',
    btnHoverTextColor: '',
    btnBgColor: '#137BCD',
    btnHoverBgColor: '#4CCCFF',

    // Icons
    iconColor: '#7D8D9A',
    iconActiveColor: '#79C4FD',

    // Form
    inputBgColor: 'rgb(220,235,247, 0.8)',

    accent: '#3390EC', //
  },

  dark: {
    // Background
    pageBackground: '#141C27', //
    primaryBgColor: '#1D2733', // '#212121', '#35363A'
    secondaryBgColor: '#232F40', //
    headerBgColor: '#1D2733',
    footerBgColor: '#232F40',

    // Text
    textColor: '#E6E6FA', //
    textColorSecondary: '#7D8D9A',
    titleColor: '#137BCD',
    footerTextColor: '#707579', // #768791

    // Link
    linkColor: '#137BCD',
    linkActiveColor: '#79C4FD', // '#4CCCFF'

    // Button
    btnTextColor: '#FFFFFF',
    btnDisabledTextColor: '#707579',
    btnHoverTextColor: '#137BCD',
    btnBgColor: '#137BCD',
    btnHoverBgColor: '#79C4FD', // '#4CCCFF'

    // Icons
    iconColor: '#7D8D9A',
    iconActiveColor: '#79C4FD',

    // Form
    inputBgColor: 'rgb(220,227,229, 0.1)',

    accent: '#8774E1', //
  },
}

// linear-gradient(to bottom, #000066 0%, #000033 100%)
