import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  useFloating,
  autoUpdate,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
  useId,
} from '@floating-ui/react'
import {
  logoutAction,
  selectProfile,
  useLoginUserMutation,
  useRegisterUserMutation,
} from 'store'

import sprite from 'assets/icons/sprite.svg'
import * as SC from './AuthPanel.styled'

export const AuthPanel: FC = () => {
  const profile = useSelector(selectProfile)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [, { isLoading: isLoginLoading }] = useLoginUserMutation({
    fixedCacheKey: 'login-user',
  })
  const [, { isLoading: isRegisterLoading }] = useRegisterUserMutation({
    fixedCacheKey: 'register-user',
  })

  console.log('isLoginLoading :>> ', isLoginLoading)
  console.log('isLoginLoading :>> ', isRegisterLoading)

  // Переписати, якщо бек зберігає токен в БД
  const handleLogOut = () => {
    dispatch(logoutAction())
    navigate('/login')
    setIsOpen(false)
  }

  // Попер
  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
  })
  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, {
    role: 'menu',
  })
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ])
  const headingId = useId()

  return (
    <>
      {profile && (
        <SC.ButtonAuth ref={refs.setReference} {...getReferenceProps()}>
          <SC.Username>{profile.firstName}</SC.Username>

          <SC.IconUser>
            <use href={`${sprite}#user`} />
          </SC.IconUser>

          <SC.IconDropdown className={isOpen ? 'open' : ''}>
            <use href={`${sprite}#arrow-down`} />
          </SC.IconDropdown>
        </SC.ButtonAuth>
      )}

      {!profile && (
        <SC.LinkAuth to="/login">
          {isLoginLoading || isRegisterLoading ? (
            <SC.LoaderStyled />
          ) : (
            <p>Log in</p>
          )}
          <SC.IconUser>
            <use href={`${sprite}#user`} />
          </SC.IconUser>
        </SC.LinkAuth>
      )}

      {isOpen && (
        <FloatingFocusManager context={context} modal={false} initialFocus={-1}>
          <div
            className="Popover"
            ref={refs.setFloating}
            style={floatingStyles}
            aria-labelledby={headingId}
            {...getFloatingProps()}
          >
            <SC.List>
              <SC.ListItem role="menuitem">
                <SC.ButtonAuth onClick={handleLogOut} className="logout">
                  <SC.IconListItem>
                    <use href={`${sprite}#logout`} />
                  </SC.IconListItem>
                  Log out
                </SC.ButtonAuth>
              </SC.ListItem>
              <SC.ListItem role="menuitem">
                <SC.ListLink to={'/settings'}>
                  <SC.IconListItem>
                    <use href={`${sprite}#settings`} />
                  </SC.IconListItem>
                  Settings
                </SC.ListLink>
              </SC.ListItem>
            </SC.List>
          </div>
        </FloatingFocusManager>
      )}
    </>
  )
}
