import React from "react";
import Navigbar from './components/Navigbar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import { Route, Switch } from 'react-router-dom'
import { Modal, Button, Form, FormControl, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import AdminComp from "./components/admin/AdminComp.js";
import ImgSlider from './Animations/ImgSlider.js';

function App() {
  return (
    <div className="App" >
      <Switch>
        <Route path='/' exact>
          < Navigbar />
          < Home />
          < ImgSlider />
          < Footer />
        </Route>
        <Route path='/admin' exact>
          <AdminComp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
