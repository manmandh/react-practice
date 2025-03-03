import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function ClientLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (window) {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <div>
      <Outlet />
    </div>
  )
}
