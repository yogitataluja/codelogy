import React from 'react'
import { NavLink } from 'react-router-dom'
import errIm from "./imges/404img.webp"


const Error = () => {
    return (
        <>
        <div className="errpag">

        <div className="err_container mx-auto">
        <img src={errIm} alt="404 error" className="img-fluid " />
          <h1>Page not found</h1> 
          <p>Oops.. We can't find the page you're looking for.</p>
           <NavLink to='/' className="text-uppercase btn btn-danger ">Back to the home page</NavLink>
        </div>
        
        </div>
        
        </>
    )
}

export default Error
