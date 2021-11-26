import React from "react"
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export function Header(){
    const navigate = useNavigate();
    function logout(){
        window.localStorage.removeItem("userToken")
        navigate('/Login')
    }
    return(
        <div>
            <div className="head" >
            <div className="logo"><img src="./images/myecommerce.png" alt="not loaded" width="50px" height="50px" border="1px solid black"/></div>
            <div className="name">ecommerce</div>
            <div className="search"><input type="text" id="search1" name="search-item"placeholder="Search..."   /></div>
            <div className="search2"><a href="#"><i className="fa fa-search fa-2x ml-1" aria-hidden="true"></i></a></div>
            <Link to='/myCart'>
              <div className="cart"><a href="#"><i className="fa fa-shopping-cart" ></i></a></div>
            </Link>
            <div onClick ={logout}className="login"><a target="iframe_a"><i className="fa fa-sign-in" ></i></a></div>
            <Link to='/SignUp'>
            <div className="login"><a ><i className="fa">&#xf234;</i></a></div>
            </Link>
            <div className="login"><a href="#"><i className="fa fa-gear" ></i></a></div>
        </div>
        <ul>
            <li className="home"><a href="index.html"target="_self">Home</a></li>
            <li className="home"> <a href="About us.html" target="iframe_a">AboutUS</a></li>
            <li className="home"><a href="#">Services</a></li>
            <li className="contact"><a href="#">Contact</a></li>
            <li className="address"><a href="#">Help</a></li>
        </ul>
        </div>
    )
}