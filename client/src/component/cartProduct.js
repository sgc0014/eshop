import React from 'react'

export function Cartproduct(props) {
    

    return (
        <div className="cart-product">
        <div className="cart-product-display">
          <div className="cart-product-img-container">
            <img className="cart-product-img" src="/products/product2.jpg" />
          </div>
        
        </div>
        <div className="cart-product-price">Rs.600</div>
        <div className="cart-product-quantity">
          <span className="increment quantity">+</span>10
          <span className="decrement quantity">-</span>
        </div>
      </div>
    )
}
