import React from 'react'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import {Header} from './header'
import { Nav } from './nav.js'
import { Article } from './article'
import { Footer } from './footer'
// import { Laptop,Mobile } from './product'
import ProductList from '../Product/Productlist'
import { useSelector } from 'react-redux'
import { Login } from './login'
import MyCart from '../mycart'
import { SignUp } from './SignUp'
import ProductList2 from '../Product/Adminproductlist'
import { Admininsert } from '../Admininsert'
import {Admindelete}  from '../Admindelete'
import { AddCart } from '../Addcart'
import Productdesc from './productdesc'


export  function Layout(){
    const isloggedin = useSelector(state=>state.UserReducer.isloggedin  );
    console.log("isloggedinnnnnnnnnnn",isloggedin);
    return(
<BrowserRouter>
        
        <div>
            <header>
                <Header />
            </header>
            <div className= "middle">
            <nav>
              <Nav />
            </nav>
            <article>
            <Routes>
                <Route exact path='/Admin' element={<ProductList2/>} />
                <Route exact path='/Admininsert' element={<Admininsert/>} />      
                <Route exact path='/Admininsert/:id' element={<Admininsert/>} />      
                <Route exact path='/Admindelete/:id' element={<Admindelete/>} />      
                <Route exact path='/Laptop' element={<ProductList/>} />
                <Route exact path='/myCart' element={<MyCart />} />
                <Route exact path='/Login' element={<Login/>} />
                <Route exact path='/SignUp' element={<SignUp/>} />
                <Route exact path='/productview/:id' element={<Productdesc/>} />
                <Route exact path='/cart/add/:id' element={isloggedin?<AddCart/>:<Login/>}/>
            </Routes>
                <Article />
            </article>
            </div>
            <footer>
            <Footer />
            </footer>
        </div>
        </BrowserRouter>
    );
}