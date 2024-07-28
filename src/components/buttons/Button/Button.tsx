import * as SC from './Button.styled'

export interface ButtonProps {
  children: React.ReactNode
  to?: string
  type?: 'button' | 'submit' | 'reset'
  nav?: boolean
  disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ children, to, type, nav, ...rest }) => {
  return (
    <>
      {type && (
        <SC.Button type={type} {...rest}>
          {children}
        </SC.Button>
      )}

      {to && !nav && (
        <SC.ButtonLink to={to} {...rest}>
          {children}
        </SC.ButtonLink>
      )}

      {nav && to && (
        <SC.ButtonNavLink to={to} {...rest}>
          {children}
        </SC.ButtonNavLink>
      )}
    </>
  )
}
