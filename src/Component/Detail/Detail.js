import React from "react";
import { useParams } from "react-router";
import { handlearr } from "../Slice.js"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import product from '../Product.json';
import { FaCheck } from "react-icons/fa6"
import './Detail.css'
const Detail=()=>{
    let state=useSelector((samp)=>samp)
    
    console.log(state.data.arr);
    const params=useParams()
    console.log(params.id);
    const item=state.data.arr.dynamic.find((e)=>e.id===parseInt(params.id))
    console.log(item);
    // const item=product.dynamic.find((e)=>e.id===parseInt(params.id))
    // console.log(item);
  
    return(
        <div className="container">
        <div className="det-row">
            <div className="det-col">
                <div className="det-img">
                    <img src={item.img} alt="loading"/>
                </div>
            </div>
            <div className="det-col">
                <p className="det-fresho">{item.fresho}</p>
                <div>
                    <h2>{item.proname}</h2>
                    <h2>{item.kg}</h2>
                </div>
                <div className="detail-bill">
                
                <h3>price: &#8377;{item.proprice}</h3>
                        
                </div>
                
                <p  className="det-fresho">(inclusive of all taxes)</p>
                <div className="det-button">
                {
                       item.iscart===false? <button className="det-add-btn" >Add to basket</button>:
                       <div className="det-inc-btn"><button  className="det" >-</button> <p className="det-para">{item.count}</p> <button className="det" >+</button></div>
                    }

                    <button className="det-save-btn">Save</button>
                </div>
                <div className="det-package">
                    <h4>Pack Sizes</h4>
                    <div className="det-pack">
                       
                             <div className="det-detail">
                                                <h4>{item.kg1}</h4>
                                                <h4>&#8377; {item.proprice}</h4>
                                                <FaCheck />
                            </div>
                            <div className="det-detail">
                                                <h4>{item.kg2}</h4>
                                                <h4>&#8377; {item.proprice2}</h4>
                                                <FaCheck />
                            </div>
                            <div className="det-detail">
                                                <h4>{item.kg3}</h4>
                                                <h4>&#8377; {item.proprice3}</h4>
                                                <FaCheck />
                            </div>
                            
                    </div>
                </div>
            </div>
        </div>
        <div>
            
                
                    <div>
                        <h2>{item.head}</h2>
                    <div className="det-info">
                        
                        <div className="det-information">
                            <h4>{item.abo_head}</h4>
                            <ul>
                                <li>{item.abo_detail1}</li>
                                <li>{item.abo_detail2}</li>
                            </ul>
                        </div>
                        <hr/>
                        <div className="det-information">
                            <h4>{item.benifit_head}</h4>
                            <ul>
                                <li>{item.ben_detail1}</li>
                                <li>{item.ben_detail2}</li>
                            </ul>
                        </div>
                        <hr/>
                        <div className="det-information">
                            <h4>{item.store_head}</h4>
                            <ul>
                                <li>{item.store_detail}</li>
                            </ul>
                        </div>
                        <hr/>
                        <div className="det-information">
                            <h4>{item.other_head}</h4>
                            <ul>
                                <li>{item.other_detail1}</li>
                                <li>{item.other_detail2}</li>
                            </ul>
                        </div>
                    </div>
                </div>
             
        </div>
    </div>
    )

}
export default  Detail