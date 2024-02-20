import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './NewQuote.css'; 

function NewQuote() {
  let usernameInputRef = useRef();
  let quoteInputRef = useRef();
  let navigate = useNavigate();

  async function addQuoteHandler(e) {
    e.preventDefault();
    let author = usernameInputRef.current.value;
    let text = quoteInputRef.current.value;
    try {
      let res = await axios.post('https://quotesback.onrender.com/addquotes', { author, text });
      navigate('/allquotes');
    } catch (e) {
      console.log('Can not create a quote...');
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={addQuoteHandler}>
        <div className="form-group">
          <label htmlFor="naam" className="label">
            Author
          </label>
          <input type="text" placeholder="Author's Name" id="naam" ref={usernameInputRef} className="input" />
        </div>
        <div className="form-group">
          <label htmlFor="textt" className="label">
            Quote
          </label>
          <textarea
            ref={quoteInputRef}
            id="textt"
            cols="30"
            rows="4"
            placeholder="Author's Quote"
            className="textarea"
          ></textarea>
        </div>
        <button type="submit" className="button">
          Add Quote
        </button>
      </form>
    </div>
  );
}

export default NewQuote;
