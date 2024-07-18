import { useState } from 'react'
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
import { logoutAction, selectProfile } from 'store'
import sprite from 'assets/icons/sprite.svg'
import * as SC from './AuthPanel.styled'
import * as SCG from 'styles/Components.styled'

export const AuthPanel = () => {
  const profile = useSelector(selectProfile)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
      {profile ? (
        <SCG.ButtonAuth ref={refs.setReference} {...getReferenceProps()}>
          <SC.Username>{profile.firstName}</SC.Username>

          <SC.IconUser>
            <use href={`${sprite}#user`} />
          </SC.IconUser>

          <SC.IconDropdown className={isOpen ? 'open' : ''}>
            <use href={`${sprite}#arrow-down`} />
          </SC.IconDropdown>
        </SCG.ButtonAuth>
      ) : (
        <SC.Link to="/login">
          Log in
          <SC.IconUser>
            <use href={`${sprite}#user`} />
          </SC.IconUser>
        </SC.Link>
      )}

      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className="Popover"
            ref={refs.setFloating}
            style={floatingStyles}
            aria-labelledby={headingId}
            {...getFloatingProps()}
          >
            <SC.List>
              <SC.ListItem role="menuitem">
                <SCG.ButtonAuth onClick={handleLogOut}>
                  <SC.IconListItem>
                    <use href={`${sprite}#logout`} />
                  </SC.IconListItem>
                  Log out
                </SCG.ButtonAuth>
              </SC.ListItem>
              <SC.ListItem role="menuitem">
                <SCG.LinkAuth to={'/settings'}>
                  <SC.IconListItem>
                    <use href={`${sprite}#settings`} />
                  </SC.IconListItem>
                  Settings
                </SCG.LinkAuth>
              </SC.ListItem>
            </SC.List>
          </div>
        </FloatingFocusManager>
      )}
    </>
  )
}
