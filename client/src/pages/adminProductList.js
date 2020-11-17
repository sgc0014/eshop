import React, { useEffect } from "react";
import { FiPlus, FiEdit } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./userList.css";
import { getuserList, userdelete } from "../store/actions/userAction";
import { listProducts, productdelete } from "../store/actions/productActions";


export function Adminproductlist(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { userInfo } = useSelector((state) => state.userLogin);
const {products} = productList

  const history = useHistory();
  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }
    dispatch(listProducts());
  }, [dispatch,userInfo]);

  return (
    <>
      <section className="userList-container">
        
        <header>
          <h2>Products</h2>
        </header>

        <main className="users-container">
          <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th></th>
            </tr>
            {products &&
              products.map((product,i=product._id) => (
                <tr key={i}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.brand}</td>              
                  <td className="edit">
                    <Link to={`/admin/productdetail/${product._id}`}>
                      <FiEdit />
                    </Link>

                    <MdDelete
                    style={{cursor:"pointer"}}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(productdelete(product._id));
                      }}
                    />
                  </td>
                </tr>
              ))}
          </table>
        </main>
      </section>
    </>
  );
}
