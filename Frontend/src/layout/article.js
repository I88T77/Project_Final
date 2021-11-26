import React from "react";
import { Laptop } from "./product";

export function Article({pageType}){
    return(
            <div className="main">
                {pageType==='Laptop'?
                    <Laptop />:null}
                    
            </div>
    )
}

