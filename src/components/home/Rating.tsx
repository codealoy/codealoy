import React from 'react';
import { FaStar } from 'react-icons/fa';

interface RatignStarsProps {
  rating: number;
  ratingColor: string;
  ratingEmptyColor: string;
}

export const RatingStars = ({
  rating,
  ratingColor,
  ratingEmptyColor,
}: RatignStarsProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FaStar key={i} className={ratingColor} />);
    } else {
      stars.push(<FaStar key={i} className={ratingEmptyColor} />);
    }
  }
  return <div className="flex">{stars}</div>;
};
