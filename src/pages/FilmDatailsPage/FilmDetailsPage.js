import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router';
import { movieInfo } from 'helpers/filmApi';
import { FilmDetails } from 'components/FilmDetails/FilmDetails';

function FilmDetailsPage() {
  const { movieId } = useParams();
  // eslint-disable-next-line no-unused-vars
  const location = useLocation();

  const [films, setFilms] = useState(null);

  useEffect(() => {
    movieInfo(movieId)
      .then(data => {
        setFilms(data);
      })
      .catch(error => {
        console.log(error);
        alert('sorry not found');
      });
  }, [movieId]);

  return <>{films && <FilmDetails films={films} />}</>;
}
export default FilmDetailsPage;
