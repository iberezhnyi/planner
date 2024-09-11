import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
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
  useLoginUserMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
} from 'store/authApi'
import { selectProfile } from 'store/selectors'
import { Loader, MainLoader } from 'components/common'
import sprite from 'assets/icons/sprite.svg'
import * as SC from './AuthPanel.styled'

export const AuthPanel: FC = () => {
  const profile = useSelector(selectProfile)
  const navigate = useNavigate()

  const [, { isLoading: isLoginLoading }] = useLoginUserMutation({
    fixedCacheKey: 'login-user',
  })
  const [, { isLoading: isRegisterLoading }] = useRegisterUserMutation({
    fixedCacheKey: 'register-user',
  })

  const [logout, { isLoading: isLogoutLoading }] = useLogoutUserMutation()

  const handleLogOut = async () => {
    await logout()
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
      {isLogoutLoading && <MainLoader />}

      {profile && (
        <SC.ButtonAuth
          className={isOpen ? 'open' : ''}
          ref={refs.setReference}
          {...getReferenceProps()}
        >
          <SC.Username>{profile.email}</SC.Username>

          <SC.IconUser>
            <use href={`${sprite}#user`} />
          </SC.IconUser>

          <SC.IconDropdown className={isOpen ? 'open' : ''}>
            <use href={`${sprite}#arrow`} />
          </SC.IconDropdown>
        </SC.ButtonAuth>
      )}
      {!profile && (
        <SC.LinkAuth to="/login">
          {isLoginLoading || isRegisterLoading ? <Loader /> : <p>Log in</p>}
          <SC.IconUser>
            <use href={`${sprite}#user`} />
          </SC.IconUser>
        </SC.LinkAuth>
      )}
      {isOpen && (
        <FloatingFocusManager context={context} modal={false} initialFocus={-1}>
          <SC.Popover
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
          </SC.Popover>
        </FloatingFocusManager>
      )}
    </>
  )
}
