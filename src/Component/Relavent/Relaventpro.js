import React from "react";
import { useSelector } from "react-redux";
import './Relaventpro.css'
import { useNavigate } from "react-router-dom";
const Relaventpro=()=>{
    let state=useSelector((sam)=>sam)
    console.log(state.data.arr);
    let nav=useNavigate()
    const relavent=(type)=>{
        nav(`/relaventdetail?type=${type}`)
    }
    return(
        <div>
            <h1>Fruits and Vegetables</h1>
            <div>
            {
                
                          <div>
                            <div  className="state-row">
                                {
                                   state.data.arr.static.map((v)=>{
                                        return(
                                            v.type==="fruit"?
                                            <div className="state-col">
                                                <div className="state-card">
                                                    <img src={v.sta_img} alt="loading" onClick={()=>relavent(v.name)} />
                                                </div>
                                                
                                            </div>:""
                                        )
                                    })
                                }
                            </div>
                            <h1>Behaviour</h1>
                            <div  className="state-row">
                                {
                                   state.data.arr.static.map((v)=>{
                                        return(
                                            v.type==="milk"?
                                            <div className="state-col">
                                                <div className="state-card">
                                                    <img src={v.sta_img} alt="loading" onClick={()=>relavent(v.name)} />
                                                </div>
                                                
                                            </div>:""
                                        )
                                    })
                                }
                            </div>
                            <h1>Snacks Store</h1>
                            <div  className="state-row">
                                {
                                   state.data.arr.static.map((v)=>{
                                        return(
                                            v.type==="sweets"?
                                            <div className="state-col">
                                                <div className="state-card">
                                                    <img src={v.sta_img} alt="loading"  onClick={()=>relavent(v.name)}/>
                                                </div>
                                                
                                            </div>:""
                                        )
                                    })
                                }
                            </div>
                         </div>  
                       
                    // )
                // })
            }
            </div>
        </div>
    )
}
export default Relaventpro