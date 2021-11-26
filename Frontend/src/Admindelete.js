
import { useDispatch } from 'react-redux';
import { deleteProduct } from './action/ProductAction';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export function Admindelete(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        const hello = window.location.pathname.split('/');
            const _id = hello[hello.length-1];
            console.log("deletettttt11",_id);
            dispatch(deleteProduct({_id}))
            navigate('/Admin')
    
    },[])
    return(
        null
    )
}