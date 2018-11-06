import React from 'react';

const GalleryItem = (props) => {
  
  const url = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`
  return (
    <li>
      <img src={url} alt={props.title} title={props.title}/>
    </li>
  );
}

export default GalleryItem;