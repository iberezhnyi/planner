import { useState, useEffect } from 'react'
import { global } from 'styles'

export const useIsMobile = (maxWidth: string = global.breakpoint.maxTablet): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(
    window.matchMedia(`(max-width: ${maxWidth})`).matches
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia(`(max-width: ${maxWidth})`).matches)
      console.log('handleResize')
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [maxWidth])

  return isMobile
}
