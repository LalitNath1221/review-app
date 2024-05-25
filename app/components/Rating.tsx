
import React from 'react'

const Rating = () => {
  const [rating, setRating] = React.useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };
  return (
    <div className="review-container py-2">
      <div className="rating flex space-x-1">
          <span
            className={`rating-star cursor-pointer hover:text-yellow-500 text-4xl ${
              rating >= 1 ? 'text-yellow-400' : 'text-gray-500'
            }`}
            onClick={() => handleRatingChange(1)}
          >
            ★
          </span>
          <span
            className={`rating-star cursor-pointer hover:text-yellow-500 text-4xl ${
              rating >= 2 ? 'text-yellow-400' : 'text-gray-500'
            }`}
            onClick={() => handleRatingChange(2)}
          >
            ★
          </span>
          <span
            className={`rating-star cursor-pointer hover:text-yellow-500 text-4xl ${
              rating >= 3 ? 'text-yellow-400' : 'text-gray-500'
            }`}
            onClick={() => handleRatingChange(3)}
          >
            ★
          </span>
          <span
            className={`rating-star cursor-pointer hover:text-yellow-500 text-4xl ${
              rating >= 4 ? 'text-yellow-400' : 'text-gray-500'
            }`}
            onClick={() => handleRatingChange(4)}
          >
            ★
          </span>
          <span
            className={`rating-star cursor-pointer hover:text-yellow-500 text-4xl ${
              rating >= 5 ? 'text-yellow-400' : 'text-gray-500'
            }`}
            onClick={() => handleRatingChange(5)}
          >
            ★
          </span>
        </div>
    </div>
  )
}

export default Rating