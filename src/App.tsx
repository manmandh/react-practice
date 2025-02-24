import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import AdminLayout from './layouts/AdminLayout'
import AuthLayout from './layouts/AuthLayout'
import DashboardPage from './pages/Admin/Dashboard/DashboardPage'
import FoodsPage from './pages/Admin/RecipePage/RecipePage'
import LoginPage from './pages/Auth/LoginPage'
import RegisterPage from './pages/Auth/RegisterPage'
import BlogPage from './pages/Home/BlogPage'
import ContactPage from './pages/Home/ContactPage'
import HomePage from './pages/Home/HomePage'
import RecipeDetailPage from './pages/RecipeDetail/RecipeDetail'

import 'react-toastify/ReactToastify.css'
import './App.css'
import ClientLayout from './layouts/ClientLayout'
import CreateRecipePage from './pages/Admin/CreateRecipe/CreateRecipe'
import RecipeListPage from './pages/RecipeListPage/RecipeListPage'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer pauseOnFocusLoss={false} hideProgressBar position='top-right' />
      <Routes>
        <Route path='' element={<ClientLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/recipes' element={<RecipeListPage />} />
          <Route path='/recipe-details/:recipeId' element={<RecipeDetailPage />} />
        </Route>

        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='recipes' element={<FoodsPage />} />
          <Route path='create-recipe' element={<CreateRecipePage />} />
        </Route>
        <Route
          path='*'
          element={<div className='absolute inset-0 flex items-center justify-center'>Page Not Found</div>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
