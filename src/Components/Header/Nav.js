import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  
  return(
    <nav className="main-nav">
      <ul>
        <li><Link to={{pathname: "/search", search: "?tag=landscape"}}>Landscapes</Link></li>
        <li><Link to={{pathname: "/search", search: "?tag=sunset"}}>Sunsets</Link></li>
        <li><Link to={{pathname: "/search", search: "?tag=forest"}}>Forests</Link></li>
      </ul>
  </nav>
  );
}

export default Nav;