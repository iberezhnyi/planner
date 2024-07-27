import { IGlobalStyles, ITheme } from './types'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    global: IGlobalStyles
  }
}
