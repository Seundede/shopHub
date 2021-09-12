import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/product'>
          <Product />
        </Route>
        <Route path='/productlist'>
          <ProductList />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
