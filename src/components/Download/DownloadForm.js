import React from 'react';
import ReactDOM from 'react-dom'

import './DownloadForm.scss';


class DownloadForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
    alert('Photo was downloaded: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label className="label" >
            <div className="container">URL фотографии или json: </div>
          <input className="input" type="text" value={this.state.value} onChange={this.handleChange} />

          </label>
          <input className="submit" type="submit" value="Загрузить изображение" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <DownloadForm />,
    document.getElementById('root')
  );

  export default DownloadForm;