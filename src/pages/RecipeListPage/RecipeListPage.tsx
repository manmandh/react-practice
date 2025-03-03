import { Header } from "~/components/commons/Header/Header";
import { DeliciousnessMail } from "~/components/commons/DeliciousnessMail/DeliciousnessMail";
import { Footer } from "~/components/commons/Footer/Footer";
import { RecipeAndArticle } from "~/components/commons/RecipeAndArticle/RecipeAndArticle";

export default function RecipeListPage() {
  return <>
    <Header/>
    <RecipeAndArticle/>
    <DeliciousnessMail/>
    <Footer/>
  </>
}
