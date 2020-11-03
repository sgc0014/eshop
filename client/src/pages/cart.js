import React, { useEffect, useState } from "react";
import "./cart.css";

export function Cart(props) {
  const [Cartproduct, setCartproduct] = useState([
    {
      id: 0,
      name: "short sleeve tshirt",
      price: 200,
      img: "product2.jpg",
      quantity: 1,
    },
    {
      id: 1,
      name: "short tshirt",
      price: 100,
      img: "product2.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "long tshirt",
      price: 100,
      img: "product2.jpg",
      quantity: 1,
    },
  ]);
  const [sum, setsum] = useState(0);
  const [deliveryCharge, setdeliveryCharge] = useState(100);

  const setTotal = () => {
    setsum(Cartproduct.reduce((a, b) => a + b.price * b.quantity, 0));
  };

  const filterCart = (id) => {
    let newCart = Cartproduct.filter((product) => product.id !== id);
    console.log(newCart.length);
    setCartproduct(newCart);
  };

  useEffect(() => {
    if (Cartproduct.length > 0) {
      setTotal();
    }
  }, []);

  return Cartproduct && Cartproduct.length > 0 ? (
    <section style={{ marginTop: "100px" }}>
       <header className="cart-body-header">
          <div className="cart-header-container">
            <h3>Cart</h3>
          </div>
        </header>
      <main className="cart-body">
       
        {Cartproduct &&
          Cartproduct.map((product) => (
            <div className="cart-product">
              <div className="cart-product-display">
                <div className="cart-product-img-container">
                  <img
                    className="cart-product-img"
                    src={`/products/${product.img}`}
                  />
                </div>
                <div className="cart-product-quantity">
                  <div
                    className="increment quantity"
                    onClick={() => {
                      const index = Cartproduct.indexOf(product);
                      const array = [...Cartproduct];
                      array[index].quantity++;
                      setCartproduct(array);
                      setTotal();
                    }}
                  >
                    +
                  </div>
                  {product.quantity}
                  <div
                    className="decrement quantity"
                    onClick={() => {
                      const index = Cartproduct.indexOf(product);
                      const array = [...Cartproduct];
                      if (product.quantity !== 1) {
                        array[index].quantity--;
                      }

                      setCartproduct(array);
                    }}
                  >
                    -
                  </div>
                </div>
              </div>
              <div className="cart-product-info">
                <div className="cart-product-name">{product.name}</div>
                <div className="cart-product-price">Rs.{product.price}</div>
                <button
                  className="cart-product-button"
                  onClick={() => {
                    filterCart(product.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        <div
          className={
            Cartproduct.length <= 2 
              ? "cart-checkout cart-checkout-alt"
              : " cart-checkout "
          }
        >
          <button>Place order</button>
        </div>
      </main>
      <div className="price-summary">
        <header>Price Details</header>
        <div className="prices">
          <div>
            <span>Price ({Cartproduct.length} items):</span>
            <span> Rs.{sum}</span>
          </div>
          <div>
            {" "}
            <span>Delivery Charge:</span> <span>Rs.{deliveryCharge}</span>
          </div>
          <div
            className="dotted-line"
            style={{ borderBottom: "1px dotted #b7b7b7" }}
          ></div>
          <div style={{ fontWeight: "600" }}>
            <span>Total:</span>
            <span>Rs.{sum + deliveryCharge}</span>{" "}
          </div>
        </div>
      </div>
    </section>
  
  ) : (
    <section className="cart-product-empty">...No items in cart...</section>
  );
  
}
