import React from "react";
import banner from '../image/banner.jpg'
import Product from "../Product/Product.js"
import Relaventpro from "../Relavent/Relaventpro.js";
const Banner=()=>{
    return(
        <div>
            <div className="banner-img">
                <img src={banner} alt="banner"/>
            </div>
            <div>
                <Product />
                

            </div>
            
        </div>
    )
}
export default Banner