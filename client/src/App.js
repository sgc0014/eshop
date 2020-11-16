import React from "react";
import "./App.css";
import Navbar from "./component/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Category } from "./component/category";
import { Trending } from "./component/trending";
import Services from "./component/services";
import Footer from "./component/footer";
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
AOS.init();

function App() {

  const Home = () => (
   <>
    <Category />

    <Trending />

    <Services />

    <Footer />
</>
  )

  return (
    <div className="App">{console.log("localStorage",localStorage)}
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/men' component={Men}/>
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
      <Route path='/admin/orders/:id' component={Adminorderdetail}/>
    </Switch>
    </Router>
    </div>
  );

  
  
}

export default App;
