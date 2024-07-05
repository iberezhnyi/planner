import * as SC from "./Button.styled"

export const Button = ({ children, to, type, nav, ...rest }) => {
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
