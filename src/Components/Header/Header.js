import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = (props) => {

  return(
    <div>
      <SearchForm history={props.history}/>
      <Nav />
    </div>
  );
}

export default Header;