import { Link, Navigate, Outlet, useMatch, useNavigate } from 'react-router-dom'
import { useAuth } from '~/hooks'

const navigationLinks = [
  {
    label: 'Dashboard',
    to: '/dashboard'
  },
  {
    label: 'Recipes',
    to: '/recipes'
  }
]

export default function AdminLayout() {
  const navigate = useNavigate()
  const match = useMatch('/admin/:name')
  const { user } = useAuth()

  if (!user) return <Navigate to={'/auth/login'} />

  const handleLogoutClick = () => {
    localStorage.removeItem('user')
    navigate('/auth/login')
  }

  return (
    <div className='flex h-dvh overflow-hidden'>
      <div className='px-4 w-fit flex flex-col justify-between bg-[#222e3c] md:w-[150px] lg:w-[250px] shadow-2xl text-white'>
        <div>
          <p className='text-center font-bold text-2xl p-4'>
            <span className='line-clamp-1'>Hi {user.name}</span>
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          {navigationLinks.map((link) => (
            <Link
              key={link.to}
              className={`text-xl block p-4 duration-300 rounded-lg hover:bg-infor ${match?.params.name === link.to.slice(1) ? 'bg-infor text-white' : ''}`}
              to={`/admin${link.to}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <p onClick={handleLogoutClick} className='text-xl block p-4 text-red-500 duration-300 hover:text-red-700'>
            Log out
          </p>
        </div>
      </div>
      <div className='flex-1 py-4 pr-4 overflow-y-auto bg-[#19222c]'>
        <div id='content' className='w-full p-4 h-full overflow-y-auto rounded-[30px] relative text-white'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
