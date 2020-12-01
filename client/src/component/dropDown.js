import Axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { listProducts } from "../store/actions/productActions";

export function Dropdown(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [dropdownState, setdropdownState] = useState(false);
  const [filterArr, setfilterArr] = useState([]);
  const { options, header, filterChange } = props;
  header.toLowerCase()

  const selected = async (e) => {
    const item = e.target.value.toLowerCase();
    let arr = [...filterArr];
    
    const index = arr
      .map(function (e) {
        return e;
      })
      .indexOf(item);

    if (index !== -1) {
      arr.splice(index, 1);
      filterChange({ header, filterArr: arr });
      
    } else {
     
      arr = [...arr, item];
      filterChange({ header, filterArr: arr });
      
    }

    setfilterArr([...arr])
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
            <input
              style={{ background: "none", border: "none" }}
              value={option}
              type="checkbox"
              onClick={(e) => selected(e)}
            />
            <label> {option}</label>
          </li>
        ))}
      </ul>
    </section>
  );
}
