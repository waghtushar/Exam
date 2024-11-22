import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import RecipeDetails from './component/RecipeDetails.jsx'
import RecipeList from './component/RecipeList.jsx'
import RecipeForm from './component/RecipeForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navbar/>
    <RecipeDetails/>
    <RecipeList/>
    <RecipeForm/>
  </StrictMode>,
)
