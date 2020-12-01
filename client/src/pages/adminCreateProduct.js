import React, { useEffect, useRef, useState } from "react";
import "./adminProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import {
  productDetail,
  postproductUpdate,
  createProduct,
} from "../store/actions/productActions";
import { useHistory } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import Axios from "axios";

export default function AdminCreateProduct(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const productId = props.match.params.id;
  const { userInfo } = useSelector((state) => state.userLogin);
  const productCreate = useSelector((state) => state.productCreate);
  const categoryList = [
    "Tshirt",
    "Shirt",
    "Jeans",
    "Casual footwear",
    "Sport footwear",
    "Bags",
    "Mobile Cover",
  ];
  const genderList = ["Male", "Female"];
  const [name, setname] = useState(" ");
  const [brand, setbrand] = useState(" ");
  const [category, setcategory] = useState(" ");
  const [price, setprice] = useState(" ");
  const [gender, setgender] = useState(" ");
  const [countinstock, setcountinstock] = useState("");
  const [description, setdescription] = useState(" ");
  const [img, setimg] = useState(" ");
  const [uploading, setuploading] = useState(false);
  const { loading, error, success } = productCreate;

  useEffect(() => {
    if (!userInfo.isAdmin) {
      history.push("/login");
    }
    if (success) {
      history.push("/admin/productlist");
    }
  }, [dispatch, userInfo,success]);
  const addImgRef = useRef();

  const clickUpload = (e) => {
    e.preventDefault();
    addImgRef.current.click();
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    const fileData = e.target.files[0];
    const formdata = new FormData();
    formdata.append("image", fileData);
    setuploading(true);
    try {
      const { data } = await Axios.post(
        `http://localhost:5000/api/upload`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setimg(data);

      setuploading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category !== " " && gender !== " ") {
      dispatch(
        createProduct({
          id: productId,
          name: name,
          user: userInfo.id,
          category: category,
          price: Number(price),
          img: img,
          countInStock: Number(countinstock),
          gender,
          description,
          brand: brand,
        })
      );
     
    }
  };
  return loading ? (
    <h3>loading...</h3>
  ) : error ? (
    <h3>{error}</h3>
  ) : (
    <>
      <section className="form-container">
        {console.log(img)}
        <header>
          <h2>Create Product</h2>
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
              required={true}
              value={name || ""}
            ></input>
            <div className="image-edit">
              <label htmlFor="img">
                Image (Paste url or upload):{uploading ? "uploading..." : ""}
              </label>
              <input
                onChange={(e) => {
                  setimg(e.target.value);
                }}
                id="img"
                name="img"
                required={true}
                value={img || ""}
              ></input>
              <input
                ref={addImgRef}
                className="add-img-input"
                type="file"
                onChange={handleUpload}
              />
              <button
                className="upload-button"
                onClick={clickUpload}
                disabled={uploading}
              >
                <FiUpload />
              </button>
            </div>

            <label htmlFor="price">Price:</label>
            <input
              onChange={(e) => {
                setprice(e.target.value);
              }}
              id="price"
              name="price"
              type="number"
              required={true}
              value={price || ""}
            ></input>

            <label htmlFor="brand">Brand:</label>
            <input
              onChange={(e) => {
                setbrand(e.target.value);
              }}
              id="brand"
              name="brand"
              required={true}
              value={brand || ""}
            />
            <label htmlFor="category">Category:</label>

            <select
              onChange={(e) => {
                setcategory(e.target.value.toLowerCase());
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
                console.log(countinstock);
              }}
              type="number"
              id="stock"
              name="stock"
              required={true}
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
              required={true}
              value={description || ""}
            />
          </div>
          <button className="form-button">Create</button>
        </form>
      </section>
    </>
  );
}
