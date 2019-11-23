import React from 'react';
import Header from "./components/Header/Header";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import PriceList from "./pages/PriceList/PriceList";
import Catalog from "./pages/Catalog/Catalog";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Header />
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/contacts" component={Contacts}/>
                  <Route path="/price-list" component={PriceList}/>
                  <Route path="/catalog" component={Catalog}/>
              </Switch>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
