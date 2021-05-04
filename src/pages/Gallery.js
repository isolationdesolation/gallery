
import React from 'react';
import GalleryGrid from '../components/GalleryGrid/GalleryGrid';

function Gallery() {
  return (
    <div className='container' style={{
        width: 300, 
        height: 200,  
        paddingTop: 100  }}>
      <GalleryGrid />
    </div>
  );
}

export default Gallery;