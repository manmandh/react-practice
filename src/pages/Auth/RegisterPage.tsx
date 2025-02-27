import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { SuccessResponse } from '~/commons/models'
import Loading from '~/components/elements/Loading/Loading'
import { registerUser } from '~/services'

const schema = z
  .object({
    email: z.string().email({ message: 'Email is not valid' }).min(1, 'Email can not be empty'),
    name: z.string().min(1, 'Name can not be empty'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(32, 'Password must be less than 32 characters'),
    confirm: z.string()
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Confirm is not same as password',
    path: ['confirm']
  })

type DataRegisterForm = z.infer<typeof schema>

export default function RegisterPage() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm<DataRegisterForm>({ resolver: zodResolver(schema) })
  const navigate = useNavigate()

  const handleSubmitForm = async ({ email, password, name }: DataRegisterForm) => {
    const response = await registerUser({ email, password, name })
    if (response instanceof SuccessResponse) {
      navigate('/admin/dashboard')
    } else {
      toast.error(response.error, { autoClose: 2000 })
    }
  }

  return (
    <div>
      <h1 className='text-[48px] font-bold text-center mb-[24px]'>Register</h1>
      <form onSubmit={handleSubmit(handleSubmitForm)} className='mt-[24px] flex flex-col gap-8'>
        <div className='flex flex-col gap-3'>
          <label htmlFor='name' className='select-none'>
            Name
          </label>
          <input
            type='text'
            autoFocus
            className='py-[16px] px-[24px] border rounded-lg outline-none'
            placeholder='Enter your name'
            id='name'
            {...register('name')}
          />
          <p className='text-red-500 text-xs'>{errors.name?.message ?? ''}</p>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='email' className='select-none'>
            Email
          </label>
          <input
            type='text'
            className='py-[16px] px-[24px] border rounded-lg outline-none'
            placeholder='Enter your email'
            id='email'
            {...register('email')}
          />
          <p className='text-red-500 text-xs'>{errors.email?.message ?? ''}</p>
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
          <p className='text-red-500 text-xs'>{errors.password?.message ?? ''}</p>
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='retype-password' className='select-none'>
            Retype Password
          </label>
          <input
            type='password'
            className='py-[16px] px-[24px] border rounded-lg outline-none'
            placeholder='Retype your password'
            id='retype-password'
            {...register('confirm')}
          />
          <p className='text-red-500 text-xs'>{errors.confirm?.message ?? ''}</p>
        </div>

        <button
          disabled={isSubmitting}
          className='inline-flex items-center justify-center gap-4 w-full px-[32px] py-[20px] border rounded-lg text-primary bg-white font-bold text-lg duration-300 hover:bg-primary hover:text-white my-[24px]'
        >
          {isSubmitting && <Loading color='inherit' stroke={3} />} Register
        </button>
      </form>

      <Link to={'/auth/login'} className='text-infor'>
        Already have an account
      </Link>
    </div>
  )
}
