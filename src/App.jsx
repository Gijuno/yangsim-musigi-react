import React from 'react';
import HomePage from './components/home/Home';
import AboutPage from './components/about/About'
import BagPage from './components/bag/Bag'
import ProductsPage from './components/products/Products'
import ItemPage from './components/products/Item'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from './components/ScrolltoTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/bag" component={BagPage} />
        <Route exact path="/item" component={ItemPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
