
import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom';
import Menu from './Menu';
import './header.css'



const Header = () => {

    const [Active , setActive] = useState(false)

    return (

            <nav>

                <img src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png" alt="" className="menu navbar-shopin-cart" onClick={()=> setActive(!Active)}/>

                <div className={`display ${Active ? '' : 'hiden'}`}>
                    <Menu
                    Active={Active}
                    setActive={setActive}/>
                </div>
                <div className="navbar-header">
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
            </nav>
    )
}

export default Header








