import React from 'react';
import DownloadForm from '../components/Download/DownloadForm';


function Home() {
  return (
    <div className='container' style={{
        width: 300, 
        height: 200,  
        paddingTop: 100  }}>
      <DownloadForm />
    </div>
  );
}

export default Home;