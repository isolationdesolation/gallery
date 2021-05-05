import React from 'react';
import ReactDOM from 'react-dom'
import './GalleryGrid.scss';
import data from "../../images-local.json";

class GalleryGrid extends React.Component {

    gallery = () => {
        return (
          <div className="container" >
              <ul>
            {data.galleryImages.map(address => <li><img src={address.url}></img></li>)}
            </ul>
          </div>
        )
      }
    render() { 
      return(
    <div className="gallery">
        <this.gallery />
    </div>
    );
}
}

ReactDOM.render(
    <GalleryGrid />,
    document.getElementById('root')
  );

export default GalleryGrid;