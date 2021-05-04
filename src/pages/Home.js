import React from 'react';
import UrlForm from '../components/Download/UrlForm';


function Home() {
  return (
    <div className='container' style={{
        width: 300, 
        height: 200,  
        paddingTop: 100  }}>
      <UrlForm />
    </div>
  );
}

export default Home;