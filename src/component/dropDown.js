import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function Dropdown(props) {
    const [dropdownState, setdropdownState] = useState(false);
    const [dropdownOptionState,setdropdownOptionState] = useState({})


    return (
        <section className="filter-dropdown">
        <header
          className="filter-option-header"
          onClick={() => {
            setdropdownState(!dropdownState);
          }}
        >{console.log(dropdownOptionState)}
          <span>{props.header}</span>
          {dropdownState ? (
            <span >
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
            {props.options.map(option => (
          <li className="option" >{option}</li>      
            ))}
         
        </ul>
        
      </section>
    )
}
