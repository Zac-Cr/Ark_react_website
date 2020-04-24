import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Font Awsome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

// Header/Footer
import NavigationContainer from './navigation/navigationContainer';
import Footer from './navigation/footer';

// Page Imports
import Homepage from './Pages/homepage';
import Ecoraster from './Pages/ecoraster';
import AboutUs from './Pages/about_us';
import FinishedProjects from './Pages/finished_proj';
import Products from './Pages/products';
import Contact from './Pages/contact_us';


export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <NavigationContainer/>
            <Switch>
              <Route exact path = '/' component={Homepage} />
              <Route path='/ecoraster' component={Ecoraster}/>
              <Route path='/about-us' component={AboutUs}/>
              <Route path='/finished-projects' component={FinishedProjects}/>
              {/* <Route path='/products' component={Products}/> */}
              <Route path='/contact-us' component={Contact}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}
