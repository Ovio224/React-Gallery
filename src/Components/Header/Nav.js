import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  
  return(
    <nav className="main-nav">
      <ul>
        <li><Link to={{pathname: "/search", search: "?tag=beach"}}>Beach</Link></li>
        <li><Link to={{pathname: "/search", search: "?tag=sunset"}}>Sunset</Link></li>
        <li><Link to={{pathname: "/search", search: "?tag=forest"}}>Forests</Link></li>
      </ul>
  </nav>
  );
}

export default Nav;