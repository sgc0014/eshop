import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import "./productDetail.css";
import { useDispatch, useSelector } from "react-redux";
import {
  postproductReview,
  productDetail,
} from "../store/actions/productActions";
import { addCartItem, removeCartItem } from "../store/actions/cartAction";

export function Productdetail(props) {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetail);
  const productReview = useSelector((state) => state.productReview);
  const cart = useSelector((state) => state.cart);
  const { error, loading, product } = productDetails;
  const {
    error: reviewError,
    success: reviewSuccess,
    loading: reviewLoading,
  } = productReview;
  const { cartItems } = cart;

  useEffect(() => {
 
      dispatch(productDetail(props.match.params.id));
    
      const exist = cartItems.find((x) => x._id === props.match.params.id);
      if (exist) {
        setcartState(true);
      }
      
    
  }, [dispatch, cartItems, props.match.params.id,productDetail,reviewSuccess]);

  const [cartState, setcartState] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [rating, setrating] = useState();
  const [review, setreview] = useState("");

  const cartStateAction = () => {
    if (!cartState) {
      setcartState(true);

      dispatch(addCartItem({ ...product, qty: quantity }));
    } else {
      setcartState(false);
      dispatch(removeCartItem(product));
    }
  };

  const handleReview = (e) => {
    e.preventDefault();

    const finalReview = {
      reviewNo: Number(rating),
      reviewComment: review.trim(),
    };

    if (rating > 0) {
      console.log(finalReview);
      dispatch(postproductReview(finalReview, props.match.params.id));
     setrating();
     setreview("");
    }
  };
  return !product ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error.message}</h2>
  ) : (
    <section>
      <div className="product-detail-container">
        <div className="product-detail-image-container">
          <img src={`${product.img}`} />
        </div>

        <div className="product-info">
          <header>{product.name} </header>

          <div className="product-detail-price">Rs.{product.price}</div>
       
            {/* <ReactStars
            count={5}
            size={30}
            isHalf={true}
            value={product.ratingAvg}
            edit={false}
            activeColor="#ffd700"
          /> */}
         
          <div className="extra-info">
            <h4>Availability : </h4>
            <span className="info">
              {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <div className="extra-info">
            <h4>Brand: </h4>
            <span className="info">{product.brand}</span>
          </div>

          <div className="product-description" style={{ textAlign: "justify" }}>
            {product.description}
          </div>

          <div className="product-action">
            <div className="product-quantity">
              <span className="info">Quantity: </span>
              <input
                type="number"
                value={quantity}
                min={1}
                className="product-quantity-input"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button
                onClick={() => cartStateAction()}
                className={cartState ? `add-to-cart added` : `add-to-cart`}
              >
                {cartState ? "Added" : "Add To Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-review-container">
        <h4>Provide rating</h4>

        <form className="review-form" onSubmit={handleReview}>
          {reviewLoading ? (
            <span>please wait...</span>
          ) : reviewError ? (
            <span className="error">{reviewError}</span>
          ) : (
            ""
          )}
          <ReactStars
            count={5}
            size={30}
            isHalf={true}
            value={rating}
            onChange={setrating}
            activeColor="#ffd700"
          />
          <textarea
            className="review"
            onChange={(e) => setreview(e.target.value)}
            style={{ padding: "5px" }}
            placeholder={"Write a feedback..."}
          />

          <button className="review-submit" type="submit">
            Submit
          </button>
        </form>
        <div className="reviews-collection">
          <h3>Reviews({product.reviewsCount})</h3>
          {product.reviews &&
            product.reviews.map((review) => (
              <div className="review-list">
                <div className="user-review">
                  <div>{review.name}</div>
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      isHalf={true}
                      value={review.reviewNo}
                      activeColor="#ffd700"
                      edit={false}
                    />
                    {review.createdAt.substring(0, 10)}
                  </div>
                  <div style={{ marginTop: "14px" }}>{review.reviewComment}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
