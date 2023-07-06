import React from "react";
import{Route } from "react-router";
import './style.css'


const NavBar=()=>{
    return(
        <div>
            <nav>
<a href="Login">Login</a>
<a href="Products">Products</a>
<a href="ProductDetails">ProductDetails</a>

            </nav>
        </div>
    )

}
export default NavBar