import React from 'react';
import Header from "./components/Header/Header";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Header />
              <Switch>
                  <Route exact path="/" component={Home}/>
              </Switch>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
