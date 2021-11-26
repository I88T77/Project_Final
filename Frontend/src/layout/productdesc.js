import React from 'react';
import '../layout/laptop.css'
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Productdesc = () => {
  const hello = window.location.pathname.split('/');
    const id = hello[hello.length-1];
    const result = useSelector(state=>state.ProductReducer.products);
    console.log("product1222222",result);
    const product = result.filter(checkid);
    function checkid(product1){
      return product1._id===id;
    }
    console.log("filterrrrr",product);
    

//   const navigate = useNavigate()
  return (
    <div className="cartlaptop1">
      <div className="show_cart"><h3>{product[0].productname}</h3>
        <p style={{ marginLeft: '100px' }}>{product[0].description}</p>
        <img className="image" src={product[0].image} alt="not loaded" />
        <h3>M.R.P {product[0].price}</h3>
        <div className='addToCartbtn'>
        </div>
      </div>
    </div>
  )
}
export default Productdesc;




