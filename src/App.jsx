import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/about/About'
import Navbar from './components/Navbar/Navbar'
import AboutOrg from './pages/about/aboutorg/AboutOrg'
import Footer from './components/Footer/Footer'


function App() {
 

  return (
    <>      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/aboutorg' element={<AboutOrg/>}></Route>
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
