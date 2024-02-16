import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css'; 

function MainNavigation() {
  return (
    <nav>
      <h2>Great Quotes App</h2>
      <ul>
        <li>
          <Link to="/allquotes">All Quotes</Link>
        </li>
        <li>
          <Link to="/newquote">New Quotes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
