
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
//import Button from './assets/components/atoms/Bouton'
//import NavBar from './assets/components/atoms/NavBar'
// import Nav from './assets/components/organisms/Nav'
import LoginTemplate from './assets/components/template/LoginTemplate'
import Module from './assets/components/organisms/Module'
import PrivateRoute from './assets/components/Private/PrivateRoute'
import NavBar from './assets/components/atoms/NavBar'


function App() {
 

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route  index element={<LoginTemplate/>} />
     
       <Route element={<PrivateRoute/>}>
        <Route path='/module' element={<Module/>}/>
      </Route>
        
      </Routes>

    </BrowserRouter> 
    </>
  )
}

export default App
