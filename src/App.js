import React from 'react';
import './App.css';

function ButtonDownload() {
  return (
    <button
    type="button"
    className="ButtonDownload"
    onClick={() => alert("Здесь будет загрузка изображения...")}
  >
    Загрузить изображения
  </button>
  )
}

function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        >
          Моя галерея
      </header>
      <ButtonDownload />
    </div>

  );
}

export default App;
