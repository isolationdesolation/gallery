import React from 'react';
import ButtonDownload from '../components/Download/Download';


function Home() {
  return (
    <div className='container' style={{
        width: 300, 
        height: 200,  
        paddingTop: 100  }}>
      <ButtonDownload />
    </div>
  );
}

export default Home;