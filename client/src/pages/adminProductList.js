import React, { useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./userList.css";
import { listProducts, productdelete } from "../store/actions/productActions";


export function Adminproductlist(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { userInfo } = useSelector((state) => state.userLogin);
const {products,loading} = productList

  const history = useHistory();
  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }
    
      dispatch(listProducts());
    
    
  }, [dispatch,userInfo]);

  return !loading?(
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
              products.products.map((product,i=product._id) => (
                <tr key={i}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
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
  ):"Loading...";
}
