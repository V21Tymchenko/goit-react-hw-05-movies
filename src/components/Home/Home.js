import { NavLink, useLocation } from 'react-router-dom';
import s from './Home.module.css';
import { Box } from 'theme/box';
import { Audio } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const HomePage = ({ films, loading }) => {
  const location = useLocation();
  const newFilms = [...films.slice(0, 18)];
  return (
    <section className={s.homeSection}>
      <Box maxWidth="1200px" m="0 auto" pl="15px" pr="15px">
        <h1 className={s.homeTitle}>Trending tooday</h1>
        {loading && (
          <div className={s.loading}>
            <Audio
              height="80"
              width="80"
              radius="9"
              color="red"
              ariaLabel="loading"
              wrapperStyle
            />
          </div>
        )}
        <ul className={s.homeList}>
          {newFilms.map(film => (
            <li className={s.homeItem} key={film.id}>
              <NavLink to={`movies/${film.id}`} state={{ from: location }}>
                <img
                  className={s.homeImg}
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
                />
              </NavLink>
              <div className={s.homeContainer}>
                <h2 className={s.filmTitle}>{film.title}</h2>
                <p className={s.homeName}>
                  Realise data:
                  <span className={s.filmData}>{film.release_date}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Box>
    </section>
  );
};

HomePage.prototypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool,
};
