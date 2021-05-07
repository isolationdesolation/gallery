import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import JsonData from "./JsonData"

function JsonsGrid() {
  const JsonsLoading = Loader(JsonData);
  const [appState, setAppState] = useState({
    loading: false,
    links: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:8000/names`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((links) => {
        setAppState({ loading: false, links: links });
      });
  }, [setAppState]);
  return (
    <div>
      <div className='container'>
        <h1>My links</h1>
      </div>
      <div className='links-container'>
        <JsonsLoading isLoading={appState.loading} images={appState.links} />
      </div>
      
    </div>
  );
}
export default JsonsGrid;