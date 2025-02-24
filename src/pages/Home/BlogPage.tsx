import { ChefGuide } from '~/components/commons/ChefGuide/ChefGuide'
import { Header } from '~/components/commons/Header/Header'
import { DeliciousnessMail } from '~/components/commons/DeliciousnessMail/DeliciousnessMail'
import { Footer } from '~/components/commons/Footer/Footer'
import { RecipeList } from './RecipeList'
import { ChefInterview } from '~/components/commons/ChefInterview/ChefInterview'

export default function BlogPage() {
  return (
    <>
      <Header />
      <ChefGuide />
      <ChefInterview />
      <DeliciousnessMail />
      <RecipeList recipes={[]} />
      <Footer />
    </>
  )
}
