import React from 'react';
import Header from './components/Header/Header'
import './App.scss';

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
      <Header />
      <ButtonDownload />
    </div>

  );
}

export default App;
