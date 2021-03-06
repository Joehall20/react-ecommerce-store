import React, {Component} from "react";
import { Switch,Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Details from './components/Details';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          {/*Pathing for sites pages*/}
          <Route exact path="/" component={Home}/>
          <Route path="/productlist" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
        <Footer/>

      </React.Fragment>
    );
  }
}

export default App;
