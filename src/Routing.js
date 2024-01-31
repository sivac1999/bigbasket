import React from 'react'
import Nav from './Component/Nav/Nav.js'
import Detail from './Component/Detail/Detail.js'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Banner from './Component/Nav/Banner.js'
import Relaventdetail from './Component/Relaventdetail/Relaventdetail.js'
import Relaventpro from './Component/Relavent/Relaventpro.js'
import Footer from './Component/Footer/Footer.js'
const Routing =()=>{
    return(
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path='/' element={<Banner/>} />
            <Route path='/detail/:id' element={<Detail/>}/>
            

            <Route path='/relaventdetail' element={<Relaventdetail/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}
export default Routing