import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink exact to={{pathname: "/search", search: "?tag=cat"}}>Cats</NavLink></li>
        <li><NavLink to='/search/dogs' onClick={() => props.getPhotos('dog')}>Dogs</NavLink></li>
        <li><NavLink to='/search/computers' onClick={() => props.getPhotos('pc')}>Computers</NavLink></li>
      </ul>
  </nav>
  );
}

export default Nav;