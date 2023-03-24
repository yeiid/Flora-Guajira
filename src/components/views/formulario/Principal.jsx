import React from 'react'

import Header from '../../header/Header';
import Formulario from './Formulario';
// import Footer from '../../footer/Footer';





const Principal = () => {
  return (
    <>

        <Header/>
        <section className='home-form'>
            <Formulario/>
        </section>
    </>
  )
}

export default Principal;