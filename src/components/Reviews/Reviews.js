import s from './Reviews.module.css';
import PropTypes from 'prop-types';

export function Review({ reviews }) {
  return (
    <ul>
      {reviews && (
        <>
          {reviews.map(review => (
            <li key={review.id}>
              <h3 className={s.reviewsText_white}>{review.author}</h3>
              <p className={s.reviewsText}>{review.content}</p>
            </li>
          ))}
        </>
      )}
      {reviews.length === 0 && <p className={s.noReviews}>No reviews</p>}
    </ul>
  );
}
Review.prototypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
