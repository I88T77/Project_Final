import React from 'react';
import '../layout/laptop.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { fetchProducts } from '../action/ProductAction';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';



export const ProductListDetails = ({ product }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  function sendData() {
    if (JSON.parse(window?.localStorage?.getItem('userToken'))?.username) {
      axios.post("http://localhost:4000/mongoose1/insertproductinUser", { username: JSON.parse(window?.localStorage?.getItem('userToken'))?.username, product }).then(() => {
        console.log('>>>>>>>>>>>>>>>>>>>');
      })
    }
    else{
      console.log("jjjjjjjjj");
      navigate(`/Login`)
    }
  }
  function viewData(){
    dispatch(fetchProducts());
  }
  return (
    <div className="cartlaptop1">
      <div className="show_cart"><h3>{product.productname}</h3>
        <p style={{ marginLeft: '100px' }}>{product.qty}</p>
        <img className="image" src={product.image} alt="not loaded" />
        <h3>M.R.P {product.price}</h3>
        <div className='addToCartbtn'>
          <a className="unactive">
          <Link to={`/productview/${product._id}`}>
            <i onClick={viewData} className="fa fa-plus-square" style={{ fontSize: '40px', color: 'blue' }} />
            </Link>
          </a>
          <Link to = {`/cart/add/${product._id}`}>
          <a>
            <i onClick={sendData} className="fa fa-cart-plus" style={{ fontSize: '40px', color: 'blue' }} />
          </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ProductListDetails




