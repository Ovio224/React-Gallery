import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => {
  return(
    <div>
      <SearchForm getPhotos={props.getPhotos}/>
      <Nav getPhotos={props.getPhotos}/>
    </div>
  );
}

export default Header;