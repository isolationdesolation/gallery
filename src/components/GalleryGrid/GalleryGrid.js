import React, { Fragment, useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import GalleryData from '../GalleryData/GalleryData';
import './GalleryGrid.scss';

function GalleryGrid() {
  const GalleryLoading = Loader(GalleryData);
  const [appState, setAppState] = useState({
    loading: false,
    images: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:8000/names`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((images) => {
        setAppState({ loading: false, images: images });
      });
  }, [setAppState]);
  return (
    <div>
      <div className='container'>
        <h1>My images</h1>
      </div>
      <div className='gallery-container'>
        <GalleryLoading isLoading={appState.loading} images={appState.images} />
      </div>
      
    </div>
  );
}
export default GalleryGrid;