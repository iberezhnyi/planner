// import 'styled-components'
// import { CombinedTheme } from './types'
// import { themes } from 'styles'
import { IGlobalStyles, ITheme } from './types'

// declare module 'styled-components' {
//   export interface DefaultTheme extends CombinedTheme {}
// }

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    global: IGlobalStyles
  }
}
