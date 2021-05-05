import React from 'react';
import ReactDOM from 'react-dom';

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
      ;
      if (this.state.value) {
        localStorage.setItem('url', this.state.value);
        alert('Download is started for image' + this.state.value)
      };
      if (this.state.file) {
        localStorage.setItem('file', this.state.file);
        alert('Json processing' + this.state.file)
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