import React from 'react';

const Test = (props) => {

  let tag = props.match;

  return (
    <div className="photo-container">
      <h2>{tag.params.tag}</h2>
    </div>
  );
}

export default Test;