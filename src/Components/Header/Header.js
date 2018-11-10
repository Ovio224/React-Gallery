import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => {
  let params = new URLSearchParams(props.location.search);
  let tag = params.get("tag");
  console.log(tag);
  
  return(
    <div>
      <SearchForm getPhotos={props.getPhotos} tag={tag}/>
      <Nav getPhotos={props.getPhotos}/>
    </div>
  );
}

export default Header;