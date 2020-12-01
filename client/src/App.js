import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import AOS from "aos";
import "aos/dist/aos.css";

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { Men } from "./pages/men";
import { Cart } from "./pages/cart";
import { Productdetail } from "./pages/productDetail";
import { Login } from "./pages/logIn";
import { SignUp } from "./pages/signUp";
import { Shipping } from "./pages/shipping";
import { Payment } from "./pages/payment";
import { Placeorder } from "./pages/placeOrder";
import { Orderdetail } from "./pages/orderDetail";
import { Profile } from "./pages/profile";
import { Userlist } from "./pages/userList";
import { Userdetail } from "./pages/userDetail";
import { Esewasuccess } from "./component/esewaSuccess";
import { Esewafail } from "./component/esewaFail";
import { AdminOrderList } from "./pages/adminOrderList";
import { Adminorderdetail } from "./pages/adminOrderDetail";
import { Adminproductlist } from "./pages/adminProductList";
import { Adminproductdetail } from "./pages/adminProductDetail";
import  AdminCreateProduct from "./pages/adminCreateProduct";
import { SearchResult } from "./pages/searchResult";
import { Accesories } from "./pages/accesories";
import { Women } from "./pages/women";
import { Footwear } from "./pages/footwear";
import { Home } from "./pages/Home";
AOS.init();

function App() {

  return (
    <div className="App">{console.log("localStorage",localStorage)}
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/men' component={Men}/>
      <Route path='/women' component={Women}/>
      <Route path='/footwear' component={Footwear}/>
      <Route path='/accesories' component={Accesories}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/productDetail/:id' component={Productdetail}/>
      <Route path='/logIn' component={Login}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/userlist' component={Userlist}/>
      <Route path='/userdetail/:id' component={Userdetail}/>
      <Route path='/shipping' component={Shipping}/>
      <Route path='/payment' component={Payment}/>
      <Route path='/esewa/fail' component={Esewafail}/>
      <Route path='/esewa/success' component={Esewasuccess}/>
      <Route path='/placeorder' component={Placeorder}/>
      <Route path='/orders/:id' component={Orderdetail}/>
      <Route path='/admin/orderlist' component={AdminOrderList}/>
      <Route path='/admin/productlist' component={Adminproductlist}/>
      <Route path='/admin/productdetail/:id' component={Adminproductdetail}/>
      <Route path='/admin/createproduct' component={AdminCreateProduct}/>
      <Route path='/admin/orders/:id' component={Adminorderdetail}/>
      <Route path='/search/:keyword' component={SearchResult}/>
    </Switch>
    </Router>
    </div>
  );

  
  
}

export default App;
