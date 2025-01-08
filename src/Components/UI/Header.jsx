import { NavLink } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";
export const Headers = () => {
  const[show,setShow] = useState(false)
  const handlebuttonchange = () =>{
  return setShow(!show)
  }
  return (
    <header>
      <div className="headercontainer">
        <div className="logo">
          <NavLink to="/">
            <h1>WorldAtlas</h1>
          </NavLink>
        </div>
        <div className={show ? "menu-mobile" : "menu-web"}>
          <ul className="nav-list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/country">Country</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
           <button className="ham-menu" onClick={handlebuttonchange}>
            <AiOutlineMenuFold />
            </button>
      </div>
    </header>
  );
};
