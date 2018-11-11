import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
  
  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
<<<<<<< HEAD
        <li><NavLink exact to={{pathname: "/search", search: "?tag=cat"}}>Cats</NavLink></li>
        <li><NavLink to='/search/dogs' onClick={() => props.getPhotos('dog')}>Dogs</NavLink></li>
        <li><NavLink to='/search/computers' onClick={() => props.getPhotos('pc')}>Computers</NavLink></li>
=======
        <li><NavLink to='/cats'>Cats</NavLink></li>
        <li><NavLink to='/dogs' onClick={() => props.getPhotos('dog')}>Dogs</NavLink></li>
        <li><NavLink to='/computers' onClick={() => props.getPhotos('pc')}>Computers</NavLink></li>
>>>>>>> 3468cbb9f9022a5f83c80f350f76f886159665cf
      </ul>
  </nav>
  );
}

export default Nav;