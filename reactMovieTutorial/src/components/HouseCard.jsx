import React, { useState } from 'react';
import styles from '../css/HouseCard.module.css'; // Import the CSS module

const HouseCard = ({ image, title, price, bedrooms, bathrooms, description }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Use state for expansion

  return (
    <div className={styles.houseCardContainer}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <img src={image} alt={title} className={styles.houseImage} />
      <div className={styles.houseInfo}>
        <h3>{title}</h3>
        <p>Price: ${price}</p>
        <p>{bedrooms} Bedrooms | {bathrooms} Bathrooms</p>
      </div>
      <div className={`${styles.expandedInfo} ${isExpanded ? styles.expandedVisible : ''}`}> {/* Conditional class */}
        <p>{description}</p>
        {/* Add more details here as needed */}
        <p>Square Footage: 2000 sq ft</p>
        <p>Lot Size: 0.5 acres</p>
      </div>
    </div>
  );
};

export default HouseCard;