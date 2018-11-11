import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/cats'>Cats</NavLink></li>
        <li><NavLink to='/dogs' onClick={() => props.getPhotos('dog')}>Dogs</NavLink></li>
        <li><NavLink to='/computers' onClick={() => props.getPhotos('pc')}>Computers</NavLink></li>
      </ul>
  </nav>
  );
}

export default Nav;