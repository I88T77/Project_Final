import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
import ProductListDetails from './Product/ProductListDetails';
const MyCart = () => {
    const [cartData, setCartData] = useState([])
    // const navigate = useNavigate()
    // const username = useSelector((state) => state?.UserReducer?.isloggedin?.user?.username || '')
    useEffect(() => {
        axios.get(`http://localhost:4000/mongoose1/getsingleuser/${JSON.parse(window?.localStorage?.getItem('userToken'))?.username}`).then((res) => {
            // console.log('>>>>>>>>>>>>>>>>>>>', res.data.user.userproducts)
            setCartData(res.data.user.userproducts)
        })
    }, []);

    return (<div>
        {cartData.map(p => <ProductListDetails key={p.id} showDelete={true} product={p} />)}
    </div>)
}

export default MyCart

