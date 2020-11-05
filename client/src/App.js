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
    <div className="App">
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/men' component={Men}/>
      <Route path='/cart' component={Cart}/>
      <Route path='/productDetail/:id' component={Productdetail}/>
    </Switch>
    </Router>
    </div>
  );

  
  
}

export default App;
