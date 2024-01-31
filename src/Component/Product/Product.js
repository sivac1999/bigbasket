import React, { useState } from "react"
import './Product.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { BsBookmark } from "react-icons/bs"
import { FaBookmark } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { handlearr } from "../Slice.js"
import Relaventpro from '../Relavent/Relaventpro.js'
const Product=()=>{
    let state=useSelector((samp)=>samp)
    let dispatch=useDispatch()
    console.log(state.data.arr);
    const nav=useNavigate()
    const detail=(value)=>{
        nav(`/detail/${value}`)
        // console.log(value);
    }
    
    let [select,setSelect]=useState()
 
   
   
    let liked=(id)=>{
        let x=state.data.arr.dynamic.map((e)=>{
            return e.id===id?e.issave===false?{...e,issave:true}:{...e,issave:false}:e
        })
        dispatch(handlearr(x))
    }
    let add=(id)=>{
        let n= state.data.arr.dynamic.map((e)=>{
            return e.id===id?e.iscart===false?{...e,iscart:true}:{...e,iscart:false}:e
        })
      
         dispatch(handlearr(n))    
    }
    
    let inc=(id)=>{
        let m=state.data.arr.dynamic.map((e)=>{
            return e.id===id?{...e,count:e.count+1}:e
        })
        dispatch(handlearr(m)) 
    }
    let dec=(id)=>{
        let z=state.data.arr.dynamic.map((e)=>{
            return e.id===id?e.count>1?{...e,count:e.count-1}:{...e,iscart:false}:e
        })
        dispatch(handlearr(z))
    }
    
    let [id,setid]=useState("")
      
    const handle=(id)=>{
        setid(id)
    }

    const  handlecahnge=(e)=>{
        console.log(e.target.value);
        let y=state.data.arr.dynamic.map((a)=>{
            return id===a.id? e.target.value===a.kg1?{...a,proprice:a.proprice}:
            e.target.value===a.kg2?{...a,proprice:a.proprice2}:
            e.target.value===a.kg3?{...a,proprice:a.proprice3}:a:a
        })
        dispatch(handlearr(y))
    }
        
         return(
        <div className="container">
            <div className="pro-head">
                <h2>My Smart Basket</h2>
                <button>Show more</button>
            </div>
            <div className="pro-row">
                {
                    state.data.arr.dynamic.map((e,i)=>{
                        return(
                            <div className="pro-col" key={i}>
                                <div className="pro-card" >
                                    <div className="pro-img">
                                        <img src={e.img} alt="loading" onClick={()=>detail(e.id)}/>
                                    </div>
                                    <div className="pro-detail">
                                        <small>{e.fresho}</small> 
                                        <h4 className="pro-name">{e.proname}</h4>
                                        <div className="pro-select">
                                          
                                            <select onClick={()=>handle(e.id)} onChange={handlecahnge}>
                                                <option>{e.kg1}</option>
                                                <option>{e.kg2}</option>
                                                <option>{e.kg3}</option>


                                            </select>
                                        </div>
                                        
                                          
                                            <h4>&#8377;{e.proprice}</h4>
                                            
                                         
                                        
                                    </div>
                                    <div className="pro-bottom">
                                        <div className="pro-save">
                                            {
                                                e.issave===true?<FaBookmark onClick={()=>liked(e.id)}/>:<BsBookmark onClick={()=>liked(e.id)}/>
                                            }
                                            
                                        </div>
                                        <div className="pro-add">
                                        {
                                       e.iscart===false? <button  onClick={()=>add(e.id)}>Add</button>:
                                       <div ><div className="add-remove"><button onClick={()=>dec(e.id)}>-</button> <p>{e.count}</p> <button onClick={()=>inc(e.id)}>+</button></div></div>
                                    }
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <Relaventpro/>
            </div>
        </div>
    )
            }
export default Product