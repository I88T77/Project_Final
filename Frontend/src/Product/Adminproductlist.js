import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Dashboard } from '../dashboard';
import { fetchProducts } from '../action/ProductAction'
import { Link } from 'react-router-dom';
function ProductList2() {

    const dispatch = useDispatch();
    // const loading = useSelector(state => state.ProductReducer.loading)
    const products = useSelector(state => state.ProductReducer.products);
    useEffect(() => {

        dispatch(fetchProducts())
        console.log("Product is:", products)
    }, [])
    //if (!loading) return <div> No Products or Cant fetch from server </div>
    console.log("Product is:", products)
    return (

        <div>
            <Link to='/Admininsert'>
                <td><button className="a1">insert</button></td>
            </Link>
            {
                products.length > 0 && <div>
                    <div>

                        {products.map(p => <Dashboard key={p.id} product={p} />)}

                    </div>
                </div>
            }
        </div>

    )
}
export default ProductList2;