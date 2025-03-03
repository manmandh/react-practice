import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className='w-dvw h-dvh flex items-center justify-center p-[10px] md:p-[24px] lg:p-[32px] xl:p-[48px]'>
      <div className='w-full max-w-[800px] border rounded-[15px] p-[10px] md:p-[15px] lg:p-[25px] xl:p-[32px]'>
        <Outlet />
      </div>
    </div>
  )
}
