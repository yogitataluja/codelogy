import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Home'
import { Route, Switch} from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Services from './Services'
import Navbar from './Navbar'
import Footer from './Footer'
import Error from './Error'


const App = () => {
    return (
        <>
        <Navbar/>
        <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/contact" component={Contact}/>
        <Route component={Error}/>
        </Switch> 
        <Footer/>
        </>
    )
}

export default App
