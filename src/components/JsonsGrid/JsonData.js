import React from 'react';


const JsonData = (props) => {
  const { images } = props;
  if (!images || images.length === 0) return <p>No images, sorry</p>;
  return (
    <ul>
      {images.map((image) => {        
        return (
          <li key={image} className='list'>
            <img src={image}></img>
          </li>
        );
      })}
    </ul>
  );
};
export default JsonData;