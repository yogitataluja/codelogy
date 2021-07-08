import React, {useState} from 'react'
const Contact = () => {
    const [data, setdata] = useState({
        fullname:"",
        phone:"",
        email:"",
        message:""

    })

    const inputevent=(event)=>{
        const {name, value}=event.target 
     setdata((preval)=>{
      return{...preval,
        [name]:value}
     })
    }
    const frmsubmit=(e)=>{
        e.preventDefault()
        alert(` User name is ${data.fullname} and  his contact number  and mail id is ${data.phone} and ${data.email} and messazge is ${data.message}`)
      
    }
    return (
        <>
            <div className="my-5 conta" >
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={frmsubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputevent} placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputevent} placeholder="Mobile number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputevent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={inputevent} rows="3"></textarea>
                            </div>
                            <div className="col-12 mb-lg-5 mb-5" >
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Contact