import  { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'

import { addCart, addCartSuccess, fetchCart } from './action/CartAction';
import { useNavigate } from 'react-router';
export const AddCart = () => {
    const hello = window.location.pathname.split('/');
            const _id = hello[hello.length-1];
    const navigate = useNavigate();
    const userId = useSelector(state => state.UserReducer.id)
    const onSuccess = (data) => {

        dispatch(addCartSuccess(data))

        dispatch(fetchCart(userId))
        navigate("/products")
    }
    const onFailure = () => { }
    //console.log("MATCH OBJECT ADDEDIT PRODUCT is" + JSON.stringify(match))

    console.log("ADD CART Product ID" + _id + "User Id" + userId)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addCart(userId, _id, 1, "add", onSuccess, onFailure))

    }, [])

    return (
        null)
}