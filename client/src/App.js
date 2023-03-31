import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import Shipping from "./pages/Shipping";
import NotFound from "./pages/NotFound";
import PrivateRouter from "./PrivateRouter";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/search/:keyword" component={Home} exact />
        <Route path="/page/:pagenumber" component={Home} exact />
        <Route path="/search/:keyword/page/:pageNumber" component={Home} exact/>
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRouter path="/profile" component={Profile} />
        <Route path="/cart/:id?" component={Cart} />
        <PrivateRouter path="/shipping" component={Shipping} />
        <PrivateRouter path="/payment" component={Payment} />
        <PrivateRouter path="/placeorder" component={PlaceOrder} />
        <PrivateRouter path="/order/:id" component={Order} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
