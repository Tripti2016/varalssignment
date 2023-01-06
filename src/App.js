import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import AboutUs from './components/AboutUs';
import Price from './components/Price';
import Services from './components/Services';
import './style/main.scss'
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
  return (
   <Router>
    <NavBar />
<Routes>
<Route path='/' element={ <Header />} />
<Route path='/aboutUs' element={ <AboutUs />} />
<Route path='/services' element={ <Services />} />
<Route path='/price' element={ <Price />} />


</Routes>
<Footer />

   </Router>
  )
}

export default App
