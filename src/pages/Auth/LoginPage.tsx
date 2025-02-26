import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '~/components/elements/Loading/Loading'
import { login } from '~/services'
import { ErrorResponse } from '~/commons/models'
import { toast } from 'react-toastify'
import { useState } from 'react'

const schema = z.object({
  email: z.string().email("Email is not match email's pattern"),
  password: z.string().min(8, 'At least 8 chars')
})

type DataLoginForm = z.infer<typeof schema>

export default function LoginPage() {
  const [loginErrors, setLoginErrors] = useState<DataLoginForm>({ email: '', password: '' })
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm<DataLoginForm>({ resolver: zodResolver(schema) })
  const navigate = useNavigate()

  const handleSubmitForm = async ({ email, password }: DataLoginForm) => {
    const response = await login(email)
    if (response instanceof ErrorResponse) {
      toast.error(response.error)
      return
    }

    if (response.data.email !== email) {
      setLoginErrors({ ...loginErrors, email: 'Email is not valid' })
      return
    }

    if (response.data.password !== password) {
      setLoginErrors({ ...loginErrors, password: 'Password is not valid' })
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: userPassword, ...dataStorage } = response.data
    localStorage.setItem('user', JSON.stringify(dataStorage))
    navigate('/admin/dashboard')
  }

  const handleContinueVisitorClick = () => {
    navigate('/')
  }

  return (
    <div>
      <h1 className='text-[48px] font-bold text-center'>Login</h1>
      <button
        onClick={handleContinueVisitorClick}
        className='w-full px-[32px] py-[20px] border rounded-lg text-white bg-primary font-bold text-lg duration-300 hover:bg-white hover:text-primary my-[24px]'
      >
        Continue as visitor
      </button>
      <div className='w-full h-[1px] bg-gray-300 relative'>
        <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-2 px-4 text-gray-500'>
          Or
        </span>
      </div>
      <form onSubmit={handleSubmit(handleSubmitForm)} className='mt-[24px] flex flex-col gap-8'>
        <div className='flex flex-col gap-3'>
          <label htmlFor='email' className='select-none'>
            Email
          </label>
          <input
            type='text'
            autoFocus
            className='py-[16px] px-[24px] border rounded-lg outline-none'
            placeholder='Enter your email'
            id='email'
            {...register('email')}
          />
          <p className='text-red-500 text-xs'>{errors.email?.message || loginErrors.email}</p>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='password' className='select-none'>
            Password
          </label>
          <input
            type='password'
            className='py-[16px] px-[24px] border rounded-lg outline-none'
            placeholder='Enter your password'
            id='password'
            {...register('password')}
          />
          <p className='text-red-500 text-xs'>{errors.password?.message || loginErrors.password}</p>
        </div>

        <button
          disabled={isSubmitting}
          className='inline-flex items-center justify-center gap-4 w-full px-[32px] py-[20px] border rounded-lg text-primary bg-white font-bold text-lg duration-300 hover:bg-primary hover:text-white my-[24px]'
        >
          {isSubmitting && <Loading color='inherit' stroke={3} />}Login
        </button>
      </form>

      <Link to={'/auth/register'} className='text-infor'>
        Don't have account ? Register here
      </Link>
    </div>
  )
}
