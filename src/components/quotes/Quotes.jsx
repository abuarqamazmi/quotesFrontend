import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Quotes.css'; 

function Quotes(props) {
  const navigate = useNavigate();

  function showQuoteHandler(id) {
    navigate(`/quotes/${id}`);
  }



  return (
    <li className="quote-container">
      <span>
        <h1 className="text">Text: {props.text}</h1>
        <h3 className="author">Author: {props.author}</h3>
      </span>
      <button className="button" onClick={() => showQuoteHandler(props.id)}>
        View in full page
      </button>
    </li>
  );
}

export default Quotes;
