import React from 'react';
import errorImage from '../../assets/image/Error 429-rafiki.png'; // Import your error image
import './Error.css'; // Import your custom CSS for styling

function ErrorPage() {
  return (
    <div className="error-container">
      <img src={errorImage} alt="Error" className="error-image" />
      {/* <p className="error-message">Oops! Something went wrong.</p> */}
    </div>
  );
}

export default ErrorPage;
