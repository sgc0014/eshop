import React, { useEffect } from "react";
import "./profile.css";
import {FiPlus} from 'react-icons/fi'
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { allOrderList, orderList } from "../store/actions/orderAction";

export function AdminOrderList(props) {
  const dispatch = useDispatch();
  const allOrder = useSelector((state) => state.allOrder);
  const {userInfo} = useSelector((state) => state.userLogin);
  const { order,loading } = allOrder;

  const history = useHistory();
  useEffect(() => {
    if(userInfo && userInfo.isAdmin){
        dispatch(allOrderList());
    }
    else{
        history.push("/")
    }
    
  }, [dispatch,userInfo]);

  return  !loading?order?(
    <>
      <section className="profile-container">
      
        <header>
          <h2>My Orders</h2>
        </header>

        <main className="orders-container">
          <table>
            <tr>
              <th>Id</th>
              <th>Date</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Delivered</th>
              <th>Detail</th>
            </tr>
            {order &&
              order.map((order,i=order._id) => (
                <tr key={i}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  {!order.isPaid ? (
                    <td className="not-paid"><FiPlus/></td>
                  ) : (
                    <td className="paid">Paid</td>
                  )}
                  {!order.isDelivered ? (
                    <td className="not-delivered"><FiPlus/></td>
                  ) : (
                    <td className="delivered">Delivered</td>
                  )}
                  <td className="detail">
                      <Link to={`orders/${order._id}`}>
                    <button className="detail-button">Detail</button>
                    </Link>
                  </td>
                </tr>
              ))}
           
          </table>
        
        </main>
      </section>
    </>
  ):"No any orders made":<div className="loading" >Loading...</div>
}
