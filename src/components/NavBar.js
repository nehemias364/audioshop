import React from 'react';
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Cartwidget from './CartWidget.js';
import ItemCount from './ItemCount.js';

export default function NavBar(){
   return( 
        <nav class="navbar fixed-top navbar-dark bg-dark">
            <h1 class="brand">Audioshop</h1>
            <ul class="navbar">
                <li class="nav-item active">
                    <p>Inicio</p>
                </li>
                <li class="nav-item active">
                    <p>Productos</p>
                </li>
                <li class="nav-item active">
                    <p>Contacto</p>
                </li>
            </ul>
            <Cartwidget/>
            <ItemCount></ItemCount>
        </nav>
    )
}
