import React from 'react';
import './styles.css';

const MainTitle = ({ value }) => (
  <div className="mainTitle-box">
    <h2 className="mainTitle-text">{value}</h2>
  </div>
);

export default MainTitle;