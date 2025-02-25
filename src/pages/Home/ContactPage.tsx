import { Header } from '~/components/commons/Header/Header'
import { DeliciousnessMail } from '~/components/commons/DeliciousnessMail/DeliciousnessMail'
import { Footer } from '~/components/commons/Footer/Footer'
import { RecipeList } from './RecipeList'
import { ContactForm } from '~/components/commons/Contact/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactForm />
      <DeliciousnessMail />
      <RecipeList recipes={[]} />
      <Footer />
    </>
  )
}
