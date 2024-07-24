import { FC } from 'react'
import { ColorRing, ColorRingProps } from 'react-loader-spinner'
import * as SC from './Loader.styled'

export interface LoaderProps extends ColorRingProps {
  className?: string
  isButton?: boolean
}

export const Loader: FC<LoaderProps> = ({
  visible = true,
  height = '100%',
  width = '100%',
  ariaLabel = 'color-ring-loading',
  className = '',
  colors = SC.mainLoaderColors,
  isButton,
}) => {
  return (
    <SC.StyledWrapper className={className}>
      <ColorRing
        visible={visible}
        height={height}
        width={width}
        ariaLabel={ariaLabel}
        colors={isButton ? SC.buttonLoaderColors : colors}
      />
    </SC.StyledWrapper>
  )
}
