import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home/Home'
import About from './pages/about/About'
import AboutOrg from './pages/about/aboutorg/AboutOrg'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'


function App() {
 

  return (
    <>      
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/aboutorg' element={<AboutOrg/>}/>
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
