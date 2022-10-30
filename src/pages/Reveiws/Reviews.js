import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from 'helpers/filmApi';
import { Review } from 'components/Reviews/Reviews';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await movieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.log('error :>> ', error);
      }
    };
    fetch();
  }, [movieId]);

  return <Review reviews={reviews} />;
}
export default Reviews;
