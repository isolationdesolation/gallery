
import React from 'react';
import GalleryGrid from '../components/GalleryGrid/GalleryGrid';
import JsonsGrid from '../components/JsonsGrid/JsonsGrid';

function Gallery() {
  return (
    <div className='container' style={{
        width: 300, 
        height: 200,  
        paddingTop: 100  }}>
      <GalleryGrid />
      <JsonsGrid />
    </div>
  );
}

export default Gallery;