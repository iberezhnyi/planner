import { useState, useEffect } from 'react'
import { global } from 'styles'
import debounce from 'lodash.debounce'

export const useIsMobile = (
  maxWidth: string = global.breakpoint.maxTablet
): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia(`(max-width: ${maxWidth})`).matches
  )

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.matchMedia(`(max-width: ${maxWidth})`).matches)
      // console.log('handleResize')
    }, 400)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [maxWidth])

  return isMobile
}
