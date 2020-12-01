import React, { useEffect, useRef, useState } from "react";
import "./adminProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import {
  productDetail,
  postproductUpdate,
} from "../store/actions/productActions";
import { useHistory } from "react-router-dom";
import {FiUpload} from 'react-icons/fi';
import Axios from "axios";

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
  const [gender, setgender] = useState(" ");
  const [countinstock, setcountinstock] = useState("");
  const [description, setdescription] = useState(" ");
  const [img, setimg] = useState(" ");
  const categoryList = [
    "tshirt",
    "shirt",
    "jeans",
    "casual footwear",
    "sport footwear",
    "bags",
    "mobile Cover",
  ];
  const genderList = ["male", "female"];
  const [uploading, setuploading] = useState(false)
const [uploadErr, setuploadErr] = useState("")
  const { product, detailLoading } = productDetails;
  const { loading, error, success: updateSuccess } = productUpdate;
  useEffect(() => {
    if (updateSuccess) {
      history.push("/admin/productlist");
    }
    if (!product) {
      dispatch(productDetail(productId));
    } else {
    
      setname(product.name);
      setprice(product.price);
      setbrand(product.brand);
      setcategory(product.category);
      setcountinstock(product.countInStock);
      setdescription(product.description);
      setgender(product.gender);
      setimg(product.img);
      
    }
  }, [dispatch, productId, product, updateSuccess]);

  const addImgRef = useRef();

  const clickUpload = (e) => {
    e.preventDefault();
    addImgRef.current.click();

  }
  const handleUpload = async(e) => {
    e.preventDefault();
    const fileData = e.target.files[0]
    const formdata = new FormData()
    formdata.append("image",fileData)
    setuploading(true);
    try {
      const {data} = await Axios.post(`http://localhost:5000/api/upload`,
      formdata,
      {
        headers:{
          'Content-Type': "multipart/form-data"
        }
      })
    
      setimg(data)
      
      setuploading(false)
    } catch (error) {
      setuploadErr(error)
    }
   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    dispatch(
      postproductUpdate({
        id: productId,
        name: name,
        category: category,
        price: Number(price),
        img: img,
        countInStock: Number(countinstock),
        gender,
        description,
        brand: brand,
      })
    );
  };
  return !detailLoading ? (
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
              value={name || ""}
            ></input>
            <div className="image-edit">
            <label htmlFor="img">Image (Paste url or upload):{uploading?"uploading...":uploadErr?`${uploadErr}`:""}</label>
            <input
              onChange={(e) => {
                setimg(e.target.value);
              }}
              id="img"
              name="img"
              value={img || ""}
            ></input>
            <input ref={addImgRef} className="add-img-input" type="file" onChange={handleUpload}/>
            <button className="upload-button" onClick={clickUpload}><FiUpload/></button>
            </div>

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
            <select
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              id="category"
              name="category"
              style={{ background: "#f1f0f0", minHeight: "37px" }}
              value={category || ""}
            >
              <option></option>
              {categoryList.map((item) => (
                <option value={`${item}`}>{item}</option>
              ))}
            </select>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              style={{ background: "#f1f0f0", minHeight: "37px" }}
              value={gender || ""}
              onChange={(e) => {
                setgender(e.target.value.toLowerCase());
              }}
            >
              <option></option>
              {genderList.map((item) => (
                <option value={`${item}`}>{item}</option>
              ))}
            </select>
            <label htmlFor="stock">Count in Stock:</label>
            <input
              onChange={(e) => {
                setcountinstock(e.target.value);
                console.log(countinstock)
              }}
              type="number"
              id="stock"
              name="stock"
              value={Number(countinstock) || ""}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              onChange={(e) => {
                setdescription(e.target.value);
              }}
              style={{ minHeight: "88px", minWidth: "100px" }}
              id="description"
              name="description"
              value={description || ""}
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
