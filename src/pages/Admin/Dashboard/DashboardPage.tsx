import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IRecipe } from '~/commons/interfaces/IRecipe'
import { ErrorResponse } from '~/commons/models'
import Loading from '~/components/elements/Loading/Loading'
import { useAuth } from '~/hooks'
import { getRecipesByAuthorId } from '~/services'

export default function DashboardPage() {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [fetching, setFetching] = useState(true)

  const { user } = useAuth()

  useEffect(() => {
    ;(async () => {
      if (!user) return

      const response = await getRecipesByAuthorId(user.id)
      if (response instanceof ErrorResponse) {
        toast.error(response.error)
      } else {
        setRecipes(response.data)
      }

      setFetching(false)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (fetching) {
    return (
      <div className='absolute inset-0 flex items-center justify-center'>
        <Loading stroke={3} />
      </div>
    )
  }

  return (
    <div>
      <div className='flex items-center justify-between pb-6 border-b'>
        <h2 className='text-[32px] font-bold'>Dashboard Admin</h2>
        <p className='text-xl'>{new Date().toLocaleDateString()}</p>
      </div>
      <div className='flex items-center gap-8 mt-8'>
        <div className='p-4 rounded-xl bg-orange flex flex-col justify-between text-white min-w-[200px] aspect-square shadow-xl'>
          <span>Recipes</span>
          <span className='text-[40px]'>{recipes.length}</span>
          <Link className='underline' to={'/admin/recipes'}>
            See all {'>'}
          </Link>
        </div>
      </div>
    </div>
  )
}
