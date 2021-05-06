import React from 'react';
import DownloadForm from '../components/Download/DownloadForm';


function Home() {
  return (
    <div className='container' style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '200px',
      position: 'relative'
}}>
  <DownloadForm />
    </div >
  );
}

export default Home;