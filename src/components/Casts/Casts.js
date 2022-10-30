import defaultPhotoActor from 'defaultPhotoActor/actor.png';
import s from './Coast.module.css';
import { Audio } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Casts = ({ cast, loading }) => {
  return (
    <>
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
      {cast && (
        <ul className={s.coastList}>
          {cast.length > 0 ? (
            cast.map(item => {
              return (
                <li key={item.cast_id} className={s.coastItem}>
                  {item.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                      alt="actor"
                      className={s.coastImg}
                    />
                  ) : (
                    <img
                      src={defaultPhotoActor}
                      alt="actor"
                      className={s.coastImg}
                    />
                  )}
                  <p className={s.coastText_white}>{item.name}</p>
                  <p className={s.coastText}>{item.character}</p>
                </li>
              );
            })
          ) : (
            <p className={s.noCoasts}>Don't find any cast</p>
          )}
        </ul>
      )}
    </>
  );
};

Casts.prototypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool,
};
