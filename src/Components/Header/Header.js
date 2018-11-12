import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => {

  return(
    <div>
      <a href="/"><img className="logo" src={(require('../../assets/logo.png'))} alt="Loading..." /></a>
      <SearchForm history={props.history}/>
      <Nav />
    </div>
  );
}

export default Header;