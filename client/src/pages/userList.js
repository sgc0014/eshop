import React, { useEffect } from "react";
import { FiPlus, FiEdit } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./userList.css";
import { getuserList, userdelete } from "../store/actions/userAction";
export function Userlist(props) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userList);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { userList } = users;

  const history = useHistory();
  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }
    dispatch(getuserList());
  }, [dispatch,userInfo]);

  return (
    <>
      <section className="userList-container">
        {console.log(userList)}
        <header>
          <h2>Users</h2>
        </header>

        <main className="users-container">
          <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th></th>
            </tr>
            {userList &&
              userList.map((user) => (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  {!user.isAdmin ? (
                    <td className="not-admin">
                      <FiPlus />
                    </td>
                  ) : (
                    <td className="admin">
                      <TiTick />
                    </td>
                  )}

                  <td className="edit">
                    <Link to={`/userDetail/${user._id}`}>
                      <FiEdit />
                    </Link>

                    <MdDelete
                    style={{cursor:"pointer"}}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(userdelete(user._id));
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
