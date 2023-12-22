import React, { useState, useEffect } from 'react';
import './Filter.css'; // Assuming you will create a CSS file for styling
import StarRating from '../StarRating/StarRating'; // Adjust the import path as needed
import jsonData from '../../data/combined_data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';


// Function to get the number cuisine types from the data sorted by most comon to least common
function getCuisineTypes({ results }) {


  if (results.hits) {
    results = results.hits
  }


  let cuisine_types = {};

  for (let i = 0; i < jsonData.length; i++) {

    if (jsonData[i].food_type in cuisine_types) {

      cuisine_types[jsonData[i].food_type] += 1;

    } else {

      cuisine_types[jsonData[i].food_type] = 1;

    }
  }


  cuisine_types = Object.entries(cuisine_types);

  cuisine_types.sort((a, b) => b[1] - a[1]);

  return cuisine_types;
}



const Filter = ({ results, onFilterChange }) => {
  const [displayCount, setDisplayCount] = useState(5);
  const [activeFilters, setActiveFilters] = useState({});
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    onFilterChange(activeFilters);
  }, [activeFilters, onFilterChange]);

  // Function to toggle the visibility of the filter
  const handleFilterVisibility = () => {
    setIsFilterVisible(prevState => !prevState);
  };

  // Function to toggle how amy cusine types are displayed
  const toggleDisplayCount = () => {
    if (displayCount === 5) {
      setDisplayCount(10); // Show up to 10 options
    } else if (displayCount === 10 && cuisineEntries.length > 10) {
      setDisplayCount(Number.MAX_SAFE_INTEGER); // Show all options
    } else {
      setDisplayCount(5); // Revert back to showing 5 options
    }
  };

  const toggleFilter = (filterType, filterValue) => {
    setActiveFilters(prev => {
      if (filterType === 'stars_count') {
        return {
          ...prev,
          [filterType]: { [filterValue]: !prev[filterType]?.[filterValue] }
        };
      }

      return {
        ...prev,
        [filterType]: {
          ...prev[filterType],
          [filterValue]: !prev[filterType]?.[filterValue]
        }
      };
    });
  };



  let cuisine_types = getCuisineTypes({ results });

  const cuisineEntries = cuisine_types;


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
