import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { IRecipe } from '~/commons/interfaces/IRecipe'
import { ErrorResponse } from '~/commons/models'
import { Banner } from '~/components/commons/Banner/Banner'
import { Category } from '~/components/commons/Category/Category'
import { DeliciousnessMail } from '~/components/commons/DeliciousnessMail/DeliciousnessMail'
import { Footer } from '~/components/commons/Footer/Footer'
import { Header } from '~/components/commons/Header/Header'
import { Information } from '~/components/commons/Information/Information'
import { InstagramPost } from '~/components/commons/InstagramPost/InstagramPost'
import { TittleIns } from '~/components/commons/InstagramPost/TittleIns'
import Loading from '~/components/elements/Loading/Loading'
import { getAllRecipes } from '~/services'
import { RecipeList } from './RecipeList'

const postData = [
  {
    username: 'Foodieland. ',
    location: 'Tokyo, Japan',
    likes: 44686,
    caption: 'The vegetables dishes need to have certain vitamin for those people',
    date: 'September 19'
  },
  {
    username: 'Foodieland2. ',
    location: 'New York, USA',
    likes: 32154,
    caption: 'A delicious pizza night with friends!',
    date: 'October 12'
  },
  {
    username: 'Foodieland2. ',
    location: 'New York, USA',
    likes: 32154,
    caption: 'A delicious pizza night with friends!',
    date: 'October 12'
  },
  {
    username: 'Foodieland2. ',
    location: 'New York, USA',
    likes: 32154,
    caption: 'A delicious pizza night with friends!',
    date: 'October 12'
  }
]

export default function HomePage() {
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    ;(async () => {
      const response = await getAllRecipes()
      if (response instanceof ErrorResponse) {
        toast.error(response.error)
      } else {
        setRecipes(response.data)
      }

      setFetching(false)
    })()
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <Category />
      {fetching ? (
        <div className='w-full flex items-center justify-center h-[300px]'>
          <Loading stroke={3} />
        </div>
      ) : (
        <div className='px-8 pt-[150px] flex flex-col gap-[52px]'>
          <div className='text-center flex flex-col'>
            <h2 className='text-[48px] font-primary-600 mb-6 font-[600]'>Simple and tasty recipes</h2>
            <p className='font-primary-400 mx-auto w-1/2'>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqut enim ad minim
            </p>
          </div>
          <RecipeList recipes={recipes} />
        </div>
      )}
      <Information />
      <div className='px-8 mt-12 block bg-custom-gradient'>
        <TittleIns />
        <div className='gap-10 font-primary-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4'>
          {postData.map((post, index) => (
            <InstagramPost
              key={index}
              username={post.username}
              location={post.location}
              likes={post.likes}
              caption={post.caption}
              date={post.date}
            />
          ))}
        </div>
      </div>
      {fetching ? (
        <div className='w-full flex items-center justify-center h-[300px]'>
          <Loading stroke={3} />
        </div>
      ) : (
        <div className='mx-8 py-[160px]'>
          <div className='text-center mb-[60px] flex gap-[153px]'>
            <h1 className='text-5xl font-bold'>Try this delicious recipe to make your day</h1>
            <p className='mt-4 text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua enim ad minim.
            </p>
          </div>
          <RecipeList recipes={recipes} />
        </div>
      )}

      <DeliciousnessMail />
      <Footer />
    </>
  )
}
