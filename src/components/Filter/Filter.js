import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './Filter.css';
import StarRating from '../StarRating/StarRating';
import jsonData from '../../data/combined_data.json';

// Helper function to get cuisine types from the data, sorted by most common to least common
function getCuisineTypes({ results }) {
  if (results.hits) {
    results = results.hits;
  }

  let cuisine_types = {};
  jsonData.forEach(item => {
    cuisine_types[item.food_type] = (cuisine_types[item.food_type] || 0) + 1;
  });

  return Object.entries(cuisine_types).sort((a, b) => b[1] - a[1]);
}

const Filter = ({ results, onFilterChange }) => {
  const [displayCount, setDisplayCount] = useState(5);
  const [activeFilters, setActiveFilters] = useState({});
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    onFilterChange(activeFilters);
  }, [activeFilters, onFilterChange]);

  const handleFilterVisibility = () => {
    setIsFilterVisible(prevState => !prevState);
  };

  const toggleDisplayCount = () => {
    const newDisplayCount = displayCount === 5 ? 10 : displayCount === 10 && cuisineEntries.length > 10 ? Number.MAX_SAFE_INTEGER : 5;
    setDisplayCount(newDisplayCount);
  };

  const toggleFilter = (filterType, filterValue) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: {
        ...prev[filterType],
        [filterValue]: !prev[filterType]?.[filterValue]
      }
    }));
  };

  const cuisineEntries = getCuisineTypes({ results });

  return (
    <div className="filter-container">
      {isFilterVisible && (
        <div className="filter">



          <div className={`filter__container ${isFilterVisible ? 'filter__container--open' : ''}`}>

            <div className="filter__section">
              <div className="filter__title">Cuisine/Food Type</div>
              {cuisineEntries.slice(0, displayCount).map(([cuisine, number]) => (
                <div
                  className={`filter__label ${activeFilters['food_type']?.[cuisine] ? 'filter__label--active' : ''}`}
                  key={cuisine}
                  onClick={() => toggleFilter('food_type', cuisine)}
                >
                  <div className="filter__label-text">{cuisine}</div>
                  <div className="filter__label-number">{number}</div>
                </div>
              ))}
              <button className="button__more-options" onClick={toggleDisplayCount}>
                {displayCount === 5 ? 'More Options' : displayCount === 10 && cuisineEntries.length > 10 ? 'Show All' : 'Show Less'}
              </button>
            </div>

            <div className="filter__section">
              <div className="filter__title">Rating</div>
              {[0, 1, 2, 3, 4, 5].map(rating => (
                <div
                  className={`filter__label ${activeFilters['stars_count']?.[rating] ? 'filter__label--active' : ''}`}
                  key={rating}
                  onClick={() => toggleFilter('stars_count', rating)}
                >
                  <div className="filter__label-text"><StarRating rating={rating} /></div>
                </div>
              ))}
            </div>
            <div className="filter__section">
              <div className="filter__title">Payment Options</div>
              {['AMEX/American Express', 'Visa', 'Discover', 'MasterCard'].map(paymentOption => (
                <div
                  className={`filter__label ${activeFilters['payment_options']?.[paymentOption] ? 'filter__label--active' : ''}`}
                  key={paymentOption}
                  onClick={() => toggleFilter('payment_options', paymentOption)}
                >
                  <div className="filter__label-text">{paymentOption}</div>
                </div>
              ))}
            </div>
          </div>
        </div>)}

      <button className="button__view-filter" onClick={handleFilterVisibility}>
        {isFilterVisible ?
          (<FontAwesomeIcon icon={faChevronLeft} />) :
          (<FontAwesomeIcon icon={faChevronRight} />)
        }
      </button>

    </div>


  );
};

export default Filter;
