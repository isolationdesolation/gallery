import React from 'react';
import './Loader.scss';

function ResponseLoader(Component) {
  return function ResponseLoader({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p>
        Галерея загружается
      </p>
    );
  };
}
export default ResponseLoader;