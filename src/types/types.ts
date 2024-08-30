import { calculateSpacing } from 'helpers'

// Auth, Profile
export interface IUserProfile {
  id: string
  email: string
  subscription: string
  role: string
}

export interface IAuthState {
  token: string
  profile: IUserProfile | null
}

export interface IAuthResponse {
  message: string
  access_token: string
  user: IUserProfile
}

export interface IAuthRefreshResponse {
  message?: string
  access_token: string
}

export interface ILoginFormValues
  extends Pick<IBasicAuthFormValues, 'email' | 'password'> {}

export interface IRegisterFormValues
  extends Omit<IBasicAuthFormValues, 'confirmPassword'> {}

// Theme
export type ThemeNameType = 'dark' | 'light'

// export interface ITheme {
//   [key: string]: string
// }

export interface ITheme {
  // themeName: string
  pageBackground: string
  primaryBgColor: string
  secondaryBgColor: string
  mainBgColor: string
  headerBgColor: string
  footerBgColor: string
  titleColor: string
  textColor: string
  footerTextColor: string
  textColorSecondary: string
  linkColor: string
  linkActiveColor: string
  linkActiveBgColor: string
  btnTextColor: string
  btnDisabledTextColor: string
  btnBgColor: string
  btnHoverBgColor: string
  btnHoverTextColor: string
  accent: string
  inputBgColor: string
  border: string
  iconColor: string
  iconActiveColor: string
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

    color: {
      [key: string]: string
    }
  }

  form: {
    [key: string]: string
  }

  backdrop: {
    [key: string]: string
  }

  breakpoint: {
    mobile: string
    tablet: string
    desktop: string
    largeDesktop: string

    maxMobile: string
    maxTablet: string
    maxDesktop: string
    maxLargeDesktop: string
  }

  spacing: typeof calculateSpacing
}

// Forms
export interface IBasicAuthFormValues {
  email: string
  password: string
  confirmPassword: string
  firstName: string
}
