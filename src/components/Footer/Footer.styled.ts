import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { container, section, siteLink } from 'styles/common.styled'

export const Footer = styled.footer<{ $isMainLayout?: boolean }>`
  padding-top: ${({ theme }) => theme.global.spacing(2)};
  padding-bottom: ${({ theme }) => theme.global.spacing(2)};

  ${({ $isMainLayout }) => $isMainLayout && section}

  color: ${({ theme }) => theme.footerTextColor};
  font-size: ${({ theme }) => theme.global.text.fontSize.xs};

  background-color: ${({ $isMainLayout, theme }) =>
    $isMainLayout ? theme.primaryBgColor : theme.footerBgColor};
`

export const LinkFooter = styled(Link)`
  ${siteLink}
`

export const FooterContainer = styled.div<{ $isMainLayout?: boolean }>`
  ${container}

  text-align: ${({ $isMainLayout }) => $isMainLayout && 'center'};
`
