import React from "react";
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
//import Detalhes from './pages/Detalhes'


const Roteador = ()=>{
    return(

        <BrowserRouter>
        <Routes>
             <Route path='/home' element={<Home/>}/>
        </Routes>
           
        </BrowserRouter>
    )
}

export default Roteador