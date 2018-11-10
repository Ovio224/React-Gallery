import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryForm = (props) => {

  // handleQuery(){
    let tag = props.match;
    // props.getPhotos(tag);
    console.log(tag);
  // }

  // componentWillUnmount(){
  //   this.handleQuery();
  // }
    // props.getPhotos();
    const results = props.data;
    let pictures;
    if(results.length > 0) {
      pictures = results.map(pic => 
        <GalleryItem
          farm={pic.farm}
          server={pic.server}
          id={pic.id}
          secret={pic.secret}
          key={pic.id}
          title={pic.title} 
        />
      ); // end map
    } else {
      console.log('No results');
    }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {pictures}
        {/* <!-- Not Found -->
        <li className="not-found">
          <h3>No Results Found</h3>
          <p>Your search did not return any results. Please try again.</p>
        </li> */}
      </ul>
    </div>
  );
}

export default GalleryForm;