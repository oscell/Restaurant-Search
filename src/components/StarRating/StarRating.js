import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf as fasFaStarHalf } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating, totalStars = 5 }) => {
  let stars = [];
  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <div className="star-container" key={i} style={{ position: 'relative', display: 'inline-block' }}>
        {/* Full star - always rendered, filled if rating is higher, empty otherwise */}
        <FontAwesomeIcon 
          icon={fasFaStar} 
          style={{ color: i < Math.floor(rating) ? "#ffac64" : "#e8e4e4" }} 
        />
        {/* Half star - rendered on top of an empty star if this is the half star rating */}
        {i === Math.floor(rating) && rating % 1 >= 0.5 && (
          <FontAwesomeIcon 
            icon={fasFaStarHalf} 
            style={{ color: "#ffac64", position: 'absolute', transform: 'translate(-100%,20%)'}} 
          />
        )}
      </div>
    );
  }
  return <div style={{ display: 'flex' }}>{stars}</div>;
};

export default StarRating;
