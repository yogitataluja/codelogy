import React from 'react'

import { NavLink } from 'react-router-dom'
const Section = (props) => {
    return (
        <div>
            <section id="header" className="d-flex align-items-center mb-lg-4 mb-1" >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 col-12 pt-5 pt-lg-2 order-2 order-lg-1 d-flex flex-column justify-content-center " >
                                    <h1 className="mt-2">{props.slogn} <strong className="brand-name">Codelogy</strong></h1>
                                    <h2 className="my-3">
                                    We are the Team of Talented Developer
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn btn-outline-primary getstrt">{props.btname}</NavLink>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="home-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section
