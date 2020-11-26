import Axios from "axios";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export function Dropdown(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [dropdownState, setdropdownState] = useState(false);
  const [selectedItem, setselectedItem] = useState({});
  const { options, header } = props;

  const selected = async (e) => {
    const item = e.target.value;
    let obj = {};
    obj[header.toLowerCase()] = item.toLowerCase();
    setselectedItem(obj)
   
    console.log(selectedItem)
    try {
      dispatch({ type: "PRODUCT_LIST_REQUEST" });
     
      const { data } = await Axios.post(
        `http://localhost:5000/api/products`,
       obj
      );

      dispatch({
        type: "PRODUCT_LIST_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "PRODUCT_LIST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  return (
    <section className="filter-dropdown">
  
      <header
        className="filter-option-header"
        onClick={() => {
          setdropdownState(!dropdownState);
        }}
      >
        <span>{header}</span>
        {dropdownState ? (
          <span>
            <IoIosArrowDown className="open" />
          </span>
        ) : (
          <span>
            <IoIosArrowDown className="hide" />
          </span>
        )}
      </header>
      <ul
        className={
          dropdownState
            ? "dropdown-options"
            : "dropdown-options dropdown-options-hide"
        }
      >
        {options.map((option, i) => (
          <li key={i} className="option">
            <button
              style={{ background: "none", border: "none" }}
              value={option}
              onClick={(e) => selected(e)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
