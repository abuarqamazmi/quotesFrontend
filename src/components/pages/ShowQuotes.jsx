import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link ,useNavigate} from 'react-router-dom';
import './ShowQuotes.css';
function ShowQuotes() {
  const [quote, setQuote] = useState({ author: '', text: '' });
  const [editedQuote, setEditedQuote] = useState({ author: '', text: '' });
  const [isEditing, setIsEditing] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await axios.get(`https://quotesback.onrender.com/quotes/${params.id}`);
        const { author, text } = res.data;
        setQuote({ author, text });
        setEditedQuote({ author, text });
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    }
    fetchQuote();
  }, [params.id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedQuote({ author: quote.author, text: quote.text });
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://quotesback.onrender.com/quotes/${params.id}`, editedQuote);
      setIsEditing(false);
      navigate('/allquotes');
    } catch (error) {
      console.error('Error updating quote:', error);
      res.status(500).json({ error: 'Internal Server Error' })
      navigate('/allquotes');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedQuote((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://quotesback.onrender.com/quotes/${params.id}`);
      navigate('/allquotes');
    } catch (error) {
      console.error('Error deleting quote:', error);
    }
  };

  return (
    <div>
      {isEditing ? (
         <form className="edit-form" onSubmit={handleSaveEdit}>
         <label>
           Author:
           <input type="text" name="author" value={editedQuote.author} onChange={handleChange} />
         </label>
         <br />
         <label>
           Text:
           <textarea name="text" value={editedQuote.text} onChange={handleChange} />
         </label>
         <br />
         <button className="save-button" type='submit'>Save</button>
         <button className="cancel-button" onClick={handleCancelEdit}>Cancel</button>
       </form>
      ) : (
        <>
          <h2>{quote.text}</h2>
          <p>{quote.author}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          <Link to="/allquotes">Back to All Quotes</Link>
        </>
      )}
    </div>
  );
}

export default ShowQuotes;
