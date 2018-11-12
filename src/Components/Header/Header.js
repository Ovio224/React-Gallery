import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => {

  return( // flickr logo and the nav/search components
    <div>
      <a href="/"><img className="logo" src={(require('../../assets/logo.png'))} alt="Flickr Logo" /></a> 
      <SearchForm history={props.history}/>
      <Nav />
    </div>
  );
}

export default Header;