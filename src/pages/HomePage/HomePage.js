import { HomePage } from 'components/Home/Home';

import { moviesTrending } from 'helpers/filmApi';
import { useState, useEffect } from 'react';

const Home = () => {
  const [films, getFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      try {
        const fetchMovies = await moviesTrending();
        getFilms(fetchMovies.results);
      } catch (error) {
        console.log('error :>> ', error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return <>{films && <HomePage films={films} loading={loading} />}</>;
};

export default Home;
