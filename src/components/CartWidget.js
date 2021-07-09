import React from 'react';
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../Images/cart.png";

export default class CartWidget extends React.Component {
    render() {
        return (
            // eslint-disable-next-line jsx-a11y/alt-text
            <button class="btn btn-default">
                <img src={img} class="cartIcon"></img>
            </button>
         );
    }
}
