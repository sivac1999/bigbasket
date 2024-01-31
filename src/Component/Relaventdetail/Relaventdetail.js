import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BsBookmark } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { handlearr1, handletemp } from "../Slice.js"
import './Relaventdetail.css'
import { useEffect } from "react";

const Relaventdetail = () => {
    let state = useSelector((samp) => samp)
    let [param] = useSearchParams()
    console.log(param.get("type"));
    var dispatch = useDispatch()

    //filter
    useEffect(() => {
        let x = state.data.arr.cards.filter((e) => {
            return e.name === param.get("type")
        })
        console.log(x)
        dispatch(handletemp(x))

    }, [])
    let arr1 = []
    var arr2 = []
    let tem=[]
    let boolean = false

    const handlefilter = (name) => {
        let a=state.data.arr1
        console.log(state.data.arr1)
        arr1=[...a]
        if (arr1.length<0) {
            arr1.push(name)
        }
        else {
            for (let i = 0; i<arr1.length; i++) {
                console.log(arr1[i]);
                if (arr1[i] === name) {
                    arr1[i] = ""
                    boolean = true
                    console.log("hi");
                    break
                }
            }
            if (boolean === false) {
                arr1.push(name)

            }

        }
        console.log(arr1);
        update(name,a)
      
    }
    const update=(name,a)=>{
        arr1.map((a) => {
            state.data.arr.cards.map((e) => {
                if (e.name === param.get("type")) {
                    if (e.pricename === a ||e.brandname===a||e.disname===a) {
                        // arr2 push check
                        if (arr2.length < 0) {
                            arr2.push(e)
                        }
                        else {
                            let arr2boo = false
                            arr2.map((ar) => {
                                if (ar.id === e.id) {
                                    arr2boo = true
                                }
                            })
                            if (arr2boo === false) {
                                arr2.push(e)
                                console.log('brand')
                            }
                        }
                    }
                  
                }
            })
        })
        console.log(arr2);
        dispatch(handletemp(arr2))
       dispatch(handlearr1([...arr1]))

    }
    return (
        <div>
            <div className="container">
                <div className="relavent-header-row">

                    <div className="relavent-header-col1">
                        <div>
                            <h2>Brand</h2>
                            <div>
                                <ul>
                                    {
                                        state.data.arr.static.map((e) => {
                                            return e.name === param.get("type") ? e.brand.map((a,i) => {
                                                return <li key={i}><input type="checkbox" onClick={() => handlefilter(a)} className="relavent-check" />{a}</li>
                                            }) : ""
                                        }
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2>Price</h2>
                            <div>
                                <ul>
                                    {
                                        state.data.arr.static.map((e) => {
                                            return e.name === param.get("type") ? e.price.map((a) => {
                                                return <li><input type="checkbox" onClick={() => handlefilter(a)} className="relavent-check" />{a}</li>
                                            }) : ""
                                        }
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h2>Discount</h2>
                            <div>
                                <ul>
                                    {
                                        state.data.arr.static.map((e) => {
                                            return e.name === param.get("type") ? e.discount.map((a) => {
                                                return <li><input type="checkbox" onClick={() => handlefilter(a)} className="relavent-check" />{a}</li>
                                            }) : ""
                                        }
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relavent-header-col2">
                        <div className="relavent-row">
                            {
                                state.data.temp.map((a) => {
                                    return <div className="relavent-col">

                                        <div className="relavent-card">
                                            <div className="relavent-img">
                                                <img src={a.card_img} alt="loading" />
                                            </div>
                                            <div>
                                                <small>{a.card_fresho}</small>
                                                <h4>{a.card_name}</h4>
                                                <div className="relavent-input">
                                                    <select>
                                                        <option value={a.card_kg}>{a.card_kg}</option>
                                                    </select>
                                                </div>
                                                <h4>&#8377;{a.card_price}</h4>
                                                <div className="relavent-add">
                                                    <div className="relavent-save">
                                                        <BsBookmark className="rel-save" />
                                                    </div>
                                                    <div className="relavent-btn">
                                                        {/* {
                                                                a.iscart === true ? <div className="relavent-cart-inc">
                                                                    <button onClick={() => furitdec(a.id)}>-</button>
                                                                    <p>{a.count}</p><button onClick={() => furitinc(a.id)}>+</button></div> :
                                                                    <button onClick={() => add(a.id)}>Add</button>
                                                            } */}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Relaventdetail




