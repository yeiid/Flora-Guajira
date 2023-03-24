import React from 'react'
import './menu.css'
import {Link} from 'react-router-dom';





const Menu = ({Active,setActive}) => {



    return (
            <div>
                    {/* <div className= {` ico  ${Active ? '' : 'hiden'}`}>
                        <img  src="https://cdn-icons-png.flaticon.com/512/54/54972.png" alt=""  onClick={()=> setActive(!Active)}/>
                    </div> */}
                <div className="mobile-link">
                <ul>
                    <li>
                        <Link to={'/home'}>INICIO</Link>
                    </li>
                    <li>
                        <Link to={'/formulario'}>FORMULARIO</Link>
                    </li>
                    <li>
                    <Link to={'/mapa'}>MAPA</Link>
                    </li>
                    <li>
                        <Link to={'/nosotros'}>NOSOTROS</Link>
                    </li>
                    <li>
                    <Link to={'/ayuda'}>AYUDA</Link>
                    </li>
                </ul>
                </div>
            </div>
    )
}

export default Menu;
