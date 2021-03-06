import React from 'react';

const GalleryItem = (props) => {
  //single url for every picture fetched
  const url = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg` // get the right img url with the props
  return (
    <li>
      <img src={url} alt={props.title} title={props.title}/>
      <span> {props.title}</span>
    </li>
  );
}

export default GalleryItem;