import { Outlet, useLocation, NavLink, Link } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import s from './FilmDetails.module.css';
import PropTypes from 'prop-types';
import defaultFilm from 'defaultImg/dafaultImg.jpg';

export function FilmDetails({ films }) {
  const location = useLocation();
  const locationFrom =
    location?.state?.from?.pathname + location?.state?.from?.search;
  return (
    <section className={s.sectionFilm}>
      <div className={s.serchContainer}>
        <Link to={locationFrom ?? '/'} className={s.goBack}>
          <IoMdArrowBack className={s.sectionDetails} />
          Go back
        </Link>
        <div className={s.mivieContainer}>
          <img
            alt={films.original_title}
            src={
              films.poster_path
                ? `https://image.tmdb.org/t/p/w500/${films.poster_path}`
                : defaultFilm
            }
            className={s.detailsImg}
          />

          <div>
            <h1 className={s.detailsTitle}>{films.title}</h1>
            <div>
              <p className={s.detailsText}>
                Score:
                <span className={s.detailsScore_span}>
                  {films.vote_average.toFixed(1)}
                </span>
              </p>
              <h3 className={s.detailsSecont_title}>Overview: </h3>
              <span className={s.detailsDescription}>{films.overview}</span>
              <h3 className={s.detailsSecont_title}>Genres: </h3>
              <ul className={s.detailsDescription}>
                {films.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
              <h3 className={s.detailsSecont_title}>Additional information:</h3>
              <ul className={s.more}>
                <li>
                  <NavLink
                    to="cast"
                    className={({ isActive }) =>
                      isActive ? [s.active] : [s.link]
                    }
                    state={{ from: location.state?.from ?? '/' }}
                  >
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="reviews"
                    className={({ isActive }) =>
                      isActive ? [s.active] : [s.link]
                    }
                    state={{ from: location.state?.from }}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FilmDetails.prototypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      vote_average: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};
