import { calculateSpacing } from 'helpers'
import { IGlobalStyles } from 'types'

export const global: IGlobalStyles = {
  text: {
    fontSize: {
      xxs: '0.625rem', // 10px
      xs: '0.75rem', // 12px
      s: '0.875rem', // 14px
      m: '1rem', // 16px
      l: '1.125rem', // 18px
      xl: '20px',
      xxxl: '24px',
      xxl: '28px',
      bxl: '32px',
      bxxl: '40px',
      bxxxl: '44px',
    },

    fontWeight: {
      r: 400,
      m: 500,
      sb: 600,
      b: 700,
    },

    lineHeight: {
      xl: 1.3,
      l: 1.25,
      m: 1.2,
      s: 1.125,
      xs: 1.1,
      xxs: 1,
    },
  },

  form: {
    primaryInputColor: '#DCE3E5',
    warningColor: '#FF9966',
  },

  breakpoint: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1440px',
  },

  spacing: calculateSpacing,
}
