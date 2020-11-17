import React, { useEffect, useState } from "react";
import "./userDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { productDetail, postproductUpdate } from "../store/actions/productActions";
import { useHistory } from "react-router-dom";

export function Adminproductdetail(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetail);
  const productUpdate = useSelector((state) => state.productUpdate);
  const [name, setname] = useState(" ");
  const [brand, setbrand] = useState(" ");
  const [category, setcategory] = useState(" ");
  const [price, setprice] = useState(" ");
  const {product} = productDetails;
  const { loading, error, success: updateSuccess } = productUpdate;
  useEffect(() => {
   
    if (updateSuccess) {
      history.push("/admin/productlist");
    }
    if (!product) {
      dispatch(productDetail(productId));
     
    } else {
      console.log(product);
      setname(product.name)
      setprice(product.price)
      setbrand(product.brand)
      setcategory(product.category);
    }
  }, [dispatch, productId, product, updateSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postproductUpdate({
        id: productId,
        name: name,
        category: category,
        price: price,
        brand: brand,
      })
    );
  };
  return !loading ? (
    <>
      <section className="form-container">
        <header>
          <h2>Edit Info</h2>
        </header>

        <form className="main-form" onSubmit={handleSubmit}>
          {error ? <div className="error-message">{error}</div> : ""}
          <div className="main-form-input">
            <label htmlFor="name">Name:</label>
            <input
              onChange={(e) => {
                setname(e.target.value);
              }}
              id="name"
              name="name"
              value={name || ''}
            ></input>
            <label htmlFor="price">Price:</label>
            <input
              onChange={(e) => {
                setprice(e.target.value);
              }}
              id="price"
              name="price"
              value={price || ""}
            ></input>

              <label htmlFor="brand">Brand:</label>
              <input
                onChange={(e) => {
                  setbrand(e.target.value);
                }}
                id="brand"
                name="brand"
                value={brand || ""}
              />
               <label htmlFor="category">Category:</label>
              <input
              
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
                id="category"
                name="category"
                value={category || ""}
              />
            
          </div>
          <button className="form-button">Update</button>
        </form>
      </section>
    </>
  ) : (
    "Loading"
  );
}
