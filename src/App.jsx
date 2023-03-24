import React from 'react'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/views/home/Home';
import Principal from './components/views/formulario/Principal';
import Nosotros from './components/views/nosotros/Nosotros'
import Mapa from './components/views/mapa/Mapa'
import Ayuda from './components/views/ayuda/Ayuda'

import './App.css'


const App = () => {
  return (
    <div>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}></Route> 
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/formulario' element={<Principal/>}></Route>
      <Route path='/mapa' element={<Mapa/>}></Route>
      <Route path='/nosotros' element={<Nosotros/>}></Route>
      <Route path='/ayuda' element={<Ayuda/>}></Route>
      </Routes>

    </Router>
    </div>



  )
}

export default App;


        /* <Route path='/proyecto' commponent={Proyecto}></Route>
        <Route path='/contact' commponent={Contact}></Route>
        <Route path='/ayuda' commponent={Ayuda}></Route> */