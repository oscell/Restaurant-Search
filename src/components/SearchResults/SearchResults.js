import React, { useState } from 'react';
import './SearchResults.css';
import StarRating from '../StarRating/StarRating';

const SearchResults = ({ results }) => {
  const [displayCount, setDisplayCount] = useState(3);

  let hits = [];

  if (results.hits) {
    // Check if geoDistance exists and sort hits by geoDistance if it does
    if (results.hits.some(hit => hit._rankingInfo && hit._rankingInfo.geoDistance)) {
      hits = [...results.hits].sort((a, b) => a._rankingInfo.geoDistance - b._rankingInfo.geoDistance);
    } else {
      hits = [...results.hits].sort((a, b) => b.stars_count - a.stars_count);
    }
  }


  const ShowMore = () => {
    console.log(displayCount);
    setDisplayCount(displayCount + 10);
  }


  if (hits.length === 0) {
    return (
      <div className='results'>
      <div id="no-results-message">
        <p>We didn't find any results for the search.</p>
        <p>Please try again.</p>
        <img src="https://static.thenounproject.com/png/4974710-200.png" alt="No results found" />
      </div>
      </div>
    );
  }

  return (
    <div className='results'>
      <div className="results__stats-container">
        <div className="results__count-text">{results.nbHits} results found</div>
        <div className="results__time-text">in 0.00{results.processingTimeMS} seconds</div>
        <div className="results__stats-bar"></div>
      </div>
      <div className='all_results' >
        {hits.slice(0, displayCount).map((hit, index) => (
          <div className="result" key={index}>
            <a href={hit.reserve_url} target="_blank" rel="noopener noreferrer" className="results__item-link">
              <div className="results__item">
                <div className="result__image-container">
                  <img className="result__image" src={hit.image_url} alt={hit.name} />
                </div>
                <div className="result__text-container">
                  <h1 className="result__title">{hit.name}</h1>
                  <div className="result-item__rating">
                    {hit.stars_count}<StarRating rating={hit.stars_count} />
                    ({hit.reviews_count} reviews)
                  </div>
                  <p className="result__summary">
                    {hit.food_type} | {hit.neighborhood} | {hit.price_range}
                  </p>
                </div>
              </div>
            </a>
          </div>

        ))}

      </div>
      <div className='results_button'>
        <button onClick={ShowMore} type="button" className="centered_button">Show More</button>
      </div>
    </div>
  );
};

export default SearchResults;
