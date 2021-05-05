import React from 'react';
import ReactDOM from 'react-dom'
import './GalleryGrid.scss';


class GalleryGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
      }

    render() { 
      return(

    <div className="gallery">
        <img 
      src={localStorage.getItem('url')}
      alt="new"
      />
    </div>
    );
}
}

ReactDOM.render(
    <GalleryGrid />,
    document.getElementById('root')
  );

export default GalleryGrid;