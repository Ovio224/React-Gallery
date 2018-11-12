import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => {

  return(
    <div>
      <img className="logo" src={(require('../../assets/logo.png'))} alt="Loading..." />
      <SearchForm history={props.history}/>
      <Nav />
    </div>
  );
}

export default Header;