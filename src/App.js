import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as StaticRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Careers from './Careers';
import './App.css';

class App extends React.Component {

  render() {
    return(
      <React.Fragment>
        <Header/>
            <StaticRouter>
              <Switch>              
                <Route exact path = '/' component = {Home}/>
                <Route path = '/about' component = {About}/>
                <Route exact path = '/gallery' component = {Gallery}/>
                <Route path = '/contactUs' component = {ContactUs}/>
                <Route path = '/careers' component = {Careers}/>
                <Route path = '/Home' component = {Home}/>
              </Switch>
            </StaticRouter>
            <Footer/>
          </React.Fragment>  
    )
  }
}

export default App;
