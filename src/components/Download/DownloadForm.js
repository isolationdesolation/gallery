import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import './DownloadForm.scss';


class DownloadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', file: '' };

    this.handleFileInput = this.handleFileInput.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleTextInput(event) {
    this.setState({ value: event.target.value });
  }

  handleFileInput(event) {
    console.log(event.target.files[0]);
    this.setState({ fileDownloaded: event.target.files, });
  };

  handleSubmit(event) {
    const data = new FormData();
    if (this.state.value) {
      data.append('file', JSON.stringify({ 'url': this.state.value, 'width': '', 'height': '' }));
      axios.post("http://localhost:8000/upload", data);
    };
    if (this.state.fileDownloaded) {
      for (var numberOfFiles = 0; numberOfFiles < this.state.fileDownloaded.length; numberOfFiles++) {
        data.append('file', this.state.fileDownloaded[numberOfFiles])
      }
      axios.post("http://localhost:8000/upload", data)
    };

    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label> URL изображения </label>
            </li>
            <li>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleTextInput}
              />
            </li>
            <li>
              <label> JSON файл </label>
              <input
                type="file"
                name="file"
                multiple
                onChange={this.handleFileInput}
              />
            </li>
            <li>
              <input className="submit" type="submit" value="Загрузить" />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <DownloadForm />,
  document.getElementById('root')
);

export default DownloadForm;