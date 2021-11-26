import React from "react";
import { useDispatch } from 'react-redux';
import { updateProduct } from './action/ProductAction';
import { useState } from "react";
import { useNavigate } from "react-router";

export function Adminupdate(){
    const navigate = useNavigate();
    const[pname,setProductname]=useState('')
    const [price, setCurrentPrice] = useState('')
    const dispatch = useDispatch();
    // const navigation = useNavigate();
        function submit1(){
            const productname=pname;
            dispatch(updateProduct({productname,price}))
        }
        function handleName(e){
            setProductname(e.target.value);
        }
        function handlePrice(e){
            setCurrentPrice(e.target.value);
        }
        function submit2(){
            navigate('/Admin');
        }
    return(
        <div>
        <label>productname</label>
        <input type='text' onChange={handleName}/>
        <br/>
        <br/>
        <label>price</label>
        <input type='number' onChange={handlePrice} />
        <br/>
        <br/>
        <button onClick={submit1}>Submit</button>
        <button onClick={submit2}>GoBack</button>
    
        </div>
    )
}