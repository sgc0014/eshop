import React from "react";
import "./App.css";
import logo from './logo.png'
import {FiUser,FiSearch,FiShoppingCart,FiHeart} from 'react-icons/fi'

function App() {
  return (
    <div className="App">
      <navbar className="navbar">
        <header className='brand-name'><img src={logo} /></header>
        <ul className="first-part nav-items">
          <li className="nav-item">Men</li>
          <li className="nav-item">Women</li>
          <li className="nav-item">Accesories</li>
          <li className="nav-item">Contact</li>
        </ul>
        <ul className="second-part nav-items">
          <li className="nav-item" style={{background:"#e8e8e8",borderRadius:"6px",padding:"3px 11px", display:"flex",alignItems:"center"}}>
            <input placeholder="search..." style={{background:"#e8e8e8",border:'none',outline:"none"}}></input>
            <FiSearch size={'1.5em'}/>
          </li>
          <li className="nav-item">
            <span><FiUser size={'1.5em'} /></span>
          </li>
          <li className="nav-item">
            <span><FiHeart size={'1.5em'}/></span>
            <span className='count'>0</span>
          </li>
          <li className="nav-item">
            <span><FiShoppingCart size={'1.5em'}/></span>
            <span className='count'>0</span>
          </li>
        </ul>
      </navbar>
      <section className="Advert-slideshow"></section>
    </div>
  );
}

export default App;
