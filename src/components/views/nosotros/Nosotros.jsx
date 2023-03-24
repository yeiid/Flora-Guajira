import React from 'react'
import Header from '../../header/Header';
// import Footer from '../../footer/Footer';

import './nosotros.css'




const Nosotros = () => {
  // return (
  //   <>
  //   <Header/>
  //   <section id="nosotros">
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-lg-6">
  //           <h2>¿Quiénes somos?</h2>
  //           <p>
  //             En [nombre del proyecto], somos un equipo de expertos en ingeniería ambiental, programación y sistemas digitales comprometidos con la preservación de la flora de la Región Guajira.
  //           </p>
  //           <p>
  //             Nuestro objetivo es brindar una solución innovadora para la geolocalización de especies arbóreas en las zonas urbanas de los municipios guajiros, y así contribuir al monitoreo y conservación de la biodiversidad en la región.
  //           </p>
  //         </div>
  //         <div className="col-lg-6">
  //           <img src="[ruta de imagen del equipo]" alt="Equipo de [nombre del proyecto]" />
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  //   <Footer/>
  //   </>
  // );
  return (
    <>
    <Header/>
      <section id="nosotros">
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <h2>Flora Guajira</h2>
                <p>
                Bienvenidos a Flora Guajira, la plataforma que busca geolocalizar y documentar las especies arbóreas presentes en las zonas urbanas de los municipios guajiros. Nuestra iniciativa surge de la necesidad de conocer mejor la biodiversidad local y contribuir a su conservación y manejo sostenible. La tecnología es nuestra herramienta y la comunidad nuestra fuerza para alcanzar nuestros objetivos.                </p>
            </div>

            <div className="col-md-6">
            <h2>¿Qué es Flora Guajira?</h2>
                <p>
                Flora Guajira es una iniciativa desarrollada por un equipo interdisciplinario de ingenieros ambientales y programadores, comprometidos con la protección del medio ambiente y el uso de la tecnología para el bien común. Nuestro objetivo es geolocalizar y documentar las especies arbóreas presentes en las zonas urbanas de los municipios guajiros, para que la comunidad pueda conocer mejor la biodiversidad local y contribuir a su conservación y manejo sostenible.
                </p>
                <p>
                Además, Flora Guajira es una plataforma que promueve la participación ciudadana en la conservación del medio ambiente. Todos podemos ser parte de este proyecto, aportando información sobre las especies arbóreas que encontramos en nuestras ciudades y compartiendo nuestras experiencias y conocimientos.
                </p>
            </div>

            <div className="col-md-6">
              <h2>¿Cómo funciona Flora Guajira?</h2>
                <p>
                Flora Guajira funciona a través de una aplicación web que permite a los usuarios registrar la ubicación y características de las especies arbóreas que encuentran en sus zonas urbanas. Para ello, hemos desarrollado un formulario sencillo que puede ser llenado en cualquier dispositivo con acceso a internet. La información registrada es procesada y almacenada en una base de datos georreferenciada, que permite visualizar la ubicación de cada especie en un mapa interactivo.
                </p>
                <p>
                Además, en Flora Guajira contamos con un equipo de expertos que valida la información registrada por los usuarios y la complementa con datos adicionales sobre cada especie arbórea. De esta manera, podemos ofrecer una información confiable y completa sobre la biodiversidad urbana de los municipios guajiros.
                </p>
            </div>

            <div className="col-md-6">
              <h2>¿Por qué es importante Flora Guajira?</h2>
                <p>
                Flora Guajira es importante porque nos permite conocer mejor la biodiversidad urbana de los municipios guajiros y contribuir a su conservación y manejo sostenible. Las especies arbóreas presentes en las zonas urbanas son fundamentales para la calidad de vida de las personas, ya que nos brindan múltiples servicios ecosistémicos, como la regulación del clima, la protección del suelo y el agua, la mejora de la salud y el bienestar, entre otros.
                </p>
                <p>
                Además, Flora Guajira es una plataforma que promueve la participación ciudadana en la conservación del medio ambiente y la educación ambiental. A través de nuestra iniciativa, los ciudadanos pueden conocer mejor la biodiversidad local, aprender sobre los beneficios de los árboles y los ecosistemas urbanos, y tomar acciones concretas para mejorar su entorno.
                </p>
            </div>

          </div>
        </div>
      </section>
      {/* <Footer/> */}

    </>


  );
};

export default Nosotros;