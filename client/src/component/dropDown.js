import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export function Dropdown({options,header}) {
    const [dropdownState, setdropdownState] = useState(false);
    const [selectedItem, setselectedItem] = useState({})
    
    const selected = (e) =>{
     const item = e.target.value
     setselectedItem({...selectedItem,
     item
     })
     console.log(selectedItem)
    }
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
            {options.map(option => (
          <li className="option" value={option} onClick={(e) => selected(e)} >{option}</li>      
            ))}
         
        </ul>
        
      </section>
    )
}
