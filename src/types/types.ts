import { calculateSpacing } from 'helpers'

// Auth, Profile
export interface IUserProfile {
  firstName: string
  email: string
  password: string
  _id: string
  lastName: string
  gender: string
  phone: string
  image: string
}

export interface IAuthState {
  token: string
  profile: IUserProfile | null
}

export interface IAuthResponse {
  statusMessage: string
  token: string
  user: IUserProfile
}

// Theme
export type ThemeNameType = 'dark' | 'light'

// export interface ITheme {
//   [key: string]: string
// }

export interface ITheme {
  pageBackground: string
  primaryBgColor: string
  titleColor: string
  textColor: string
  linkColor: string
  linkActiveColor: string
  btnTextColor: string
  btnBgColor: string
  btnHoverBgColor: string
}

export interface IThemes {
  light: ITheme
  dark: ITheme
}

export interface IGlobalStyles {
  text: {
    fontSize: {
      [key: string]: string
    }

    fontWeight: {
      [key: string]: number
    }

    lineHeight: {
      [key: string]: number
    }
  }

  form: {
    [key: string]: string
  }

  breakpoint: {
    [key: string]: string
  }

  spacing: typeof calculateSpacing
}

// export interface CombinedTheme extends ITheme {
//   global: IGlobalStyles
// }
