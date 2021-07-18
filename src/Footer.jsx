import React from 'react'
import { NavLink } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (<>
        <footer id="footer" className="bg-white d-flex align-items-center mb-lg-4 mb-1 text-dark ">
            <div className="container-fluid">
                <div className="row" >
                    <div className=" col-lg-10 col-12 mx-auto">
                        <div className="row">
                            <div className="col-md-5 col-lg-5 col-sm-12 col-md-6  mt-3  mx-auto  text-sm-center" >
                                <h1 className="text-capitalize mb-4 ">All-in-one platform</h1>
                                <p ><NavLink className="text-dark text-decoration-none" to="#">Employee benefits</NavLink></p>
                                <p ><NavLink className="text-dark text-decoration-none" to="#">Payroll</NavLink></p>
                                <p ><NavLink className="text-dark text-decoration-none" to="#">Health insurance</NavLink></p>
                                <p ><NavLink className="text-dark text-decoration-none" to="#">Financial BENEFITS</NavLink></p>
                                <p ><NavLink className="text-dark text-decoration-none" to="#">Hiring and onboarding</NavLink></p>
                                <p ><NavLink className="text-dark text-decoration-none" to="#">Expert HR</NavLink></p>
                                <p ><NavLink className="text-dark text-decoration-none" to="#">Time tracking tool</NavLink></p>
                                <p ><NavLink className="text-dark text-decoration-none" to="#">Workers' comp</NavLink></p>
                                
                            </div>

                            <div className=" col-lg-4 col-sm-12 col-md-6  mt-3 mx-auto text-sm-center">
                                <h1 className="text-capitalize mb-4 ">Tools</h1>

                                <p ><NavLink className="text-dark  text-decoration-none" to="#">Small Business Financial Relief</NavLink></p>
                                <p ><NavLink className="text-dark  text-decoration-none" to="#">Employer Tax calculator</NavLink></p>
                                <p ><NavLink className="text-dark  text-decoration-none" to="#">Burn rate calculator</NavLink></p>
                                <p ><NavLink className="text-dark  text-decoration-none" to="#">Salary comparision tool</NavLink></p>
                                <p ><NavLink className="text-dark  text-decoration-none" to="#">New hire checklist</NavLink></p>
                                <p ><NavLink className="text-dark  text-decoration-none " to="#">Small business guides</NavLink></p>
                                <br />
                                <br />
                                <h1 className="fwb fs-5">Social <NavLink to="#"> <span className="text-primary br"> <FacebookIcon /></span>
                                    <span style={{ color: "pink" }}><InstagramIcon /></span> </NavLink></h1>

                                <h1 className="fwb fs-5" >contact <span className="text-danger "> 0012576469</span></h1>
                            </div>


                            <div className="col-lg-3 mx-auto col-sm-12 col-md-6   mt-3  text-sm-center">
                                <h1 className="text-capitalize mb-4 ">About</h1>

                                <p ><NavLink className="text-dark  text-decoration-none" to="#">About</NavLink></p>
                                <p ><NavLink className="text-dark  text-decoration-none" to="#">Careers-<span className="text-danger">We're hiring!
                                </span></NavLink></p>
                                <p ><NavLink className="text-dark  text-decoration-none" to="#">press</NavLink></p>
                                <p ><NavLink className="text-dark  text-decoration-none" to="#">Contact</NavLink></p>
                                <p ><NavLink className="text-dark  text-decoration-none" to="#">Investors</NavLink></p>
                                <p ><NavLink className="text-dark  text-decoration-none" to="#">Affiliate program</NavLink></p>
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    </>

    )
}

export default Footer
