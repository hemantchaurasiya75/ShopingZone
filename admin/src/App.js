import React, { useEffect } from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
import Order from "./pages/Order";
import AddProduct from "./pages/AddProduct";
import Users from "./pages/Users";
import EditProduct from "./pages/EditProduct";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PrivateRouter from "./PrivateRouter";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./redux/actions/Product";
import { listOrders } from "./redux/actions/Order";
import OrderDetails from "./pages/OrderDetails";


function App() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
      dispatch(listOrders());
    }
  }, [dispatch, userInfo]);

  return (
    <>
      <Router>
        <Switch>
          <PrivateRouter path="/" component={Home} exact />
          <PrivateRouter path="/products" component={Product} />
          <PrivateRouter path="/category" component={Categories} />
          <PrivateRouter path="/orders" component={Order} />
          <PrivateRouter path="/order/:id" component={OrderDetails} />
          <PrivateRouter path="/addproduct" component={AddProduct} />
          <PrivateRouter path="/users" component={Users} />
          <PrivateRouter path="/product/:id/edit"component={EditProduct}/>
          <Route path="/login" component={Login} />
          <PrivateRouter path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
