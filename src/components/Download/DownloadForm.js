import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import './DownloadForm.scss';


class DownloadForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {text: '', file: ''};
  
      this.handleFileInput = this.handleFileInput.bind(this);
      this.handleTextInput = this.handleTextInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleTextInput(event) {
      this.setState({value: event.target.value});
    }

    handleFileInput (event) {
      console.log(event.target.files[0]);
      this.setState({ file: event.target.files[0] });
    };

    handleSubmit(event) {
      const data = new FormData();
      if (this.state.value) {
        data.append('file', JSON.stringify({'url': this.state.value, 'width': '', 'height': ''}));
        axios.post("http://localhost:8000/upload", data);
      };
      if (this.state.file) {
        data.append('file', this.state.file);
        axios.post("http://localhost:8000/upload", data)
      };
      
        event.preventDefault();
      }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
           <div>
            <input
              className="input"
              type="text"
              value={this.state.value}
              onChange={this.handleTextInput}
            />
          </div>
          <div>
            <div>
              <input
                type="file"
                name="file"
                onChange={this.handleFileInput}
              />
            </div>              
            </div>
          <input className="submit" type="submit" value="Загрузить" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <DownloadForm />,
    document.getElementById('root')
  );

  export default DownloadForm;