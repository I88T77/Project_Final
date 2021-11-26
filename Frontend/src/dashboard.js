import React from 'react';
import './dashboard.css'
import { Link } from 'react-router-dom';

export function Dashboard({ product }) {

    return (
        <div>
            <table >
                <tbody>
                    <tr>
                        <th className="p1">Product</th>
                        <th className="p2">Price</th>
                    </tr>
                    <tr>
                        <td className="p1">{product.productname}</td>
                        <td className="p2">{product.price}</td>

                        <Link to={`/Admininsert/${product._id}`} >
                            <td><button className="a2">edit</button></td>
                        </Link>
                        <Link to={`/Admindelete/${product._id}`}>
                            <td><button className="a2">delete</button></td>
                        </Link>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}