// imports
import Router from './Routes/router'
import './styles/style.css'


Router()   

window.addEventListener("popstate",()=>{
  Router()
})
