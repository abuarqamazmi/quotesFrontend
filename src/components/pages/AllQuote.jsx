import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Quotes from '../quotes/Quotes';
import './AllQuote.css'; 

function AllQuote() {
  let [quotes, setQuotes] = useState([]);

  useEffect(function () {
    async function getQuotes() {
      const res = await axios.get('https://quotesback.onrender.com/allquotes');
      // console.log(res, ' api result..');
      setQuotes(res.data);
    }
    getQuotes();
  }, []);

  return (
    <div className="all-quotes-container">
      <h1>All quotes</h1>
      <ul className="quotes-list">
        {quotes.map((quote) => (
          <Quotes key={quote._id} id={quote._id} text={quote.text} author={quote.author} />
        ))}
      </ul>
    </div>
  );
}

export default AllQuote;
