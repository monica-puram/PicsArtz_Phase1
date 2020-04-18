import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as StaticRouter, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Careers from './Careers';
import CareersForm from './components/CareersForm';
import './App.css';
import HeaderNav from './components/HeaderNav';

class App extends React.Component {

  render() {
    return(
      <React.Fragment>
        <HeaderNav/>
            <StaticRouter>
              <Switch>              
                <Route exact path = '/' component = {Home}/>
                <Route path = '/about' component = {About}/>
                <Route exact path = '/gallery' component = {Gallery}/>
                <Route path = '/contactUs' component = {ContactUs}/>
                <Route path = '/careers' component = {Careers}/>
                <Route path = '/careersApply' component = {CareersForm}/>
                <Route path = '/Home' component = {Home}/>
              </Switch>
            </StaticRouter>
            <Footer/>
          </React.Fragment>  
    )
  }
}

export default App;
