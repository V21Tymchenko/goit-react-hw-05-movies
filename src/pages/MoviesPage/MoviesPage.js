import { useEffect, useState } from 'react';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { moviesSearch } from 'helpers/filmApi';
import defaultImg from 'defaultImg/dafaultImg.jpg';
import { BsSearch } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import s from './MoviesPage.module.css';
import { Box } from 'theme/box';
import { ScrollButton } from 'components/ScrollUp/ScrollUp';
import { Audio } from 'react-loader-spinner';

function MiviesPage() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const search = searchParams.get('search') ?? '';
  const location = useLocation();

  useEffect(() => {
    sidebarSearch(search, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    sidebarSearch(search, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function sidebarSearch(search, page) {
    if (!search) return;

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const movies = await moviesSearch(search, page);

        if (movies.results.length < 1) {
          return toast.error('We dont have any movies with name ' + search);
        }
        setSearchMovies([...searchMovies, ...movies.results]);
      } catch (error) {
        if (error.response.status === 422) {
          return toast.error('We dont have any movies with name ' + search);
        }
        console.log('error :>> ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.query;
    setSearchParams({ search: value });
    setPage(1);
    setSearchMovies([]);

    e.target.reset();
  };

  const handleButtonLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const loadMore = searchMovies.length >= 20 && searchMovies.length <= 70;

  return (
    <section className={s.SearchSection}>
      <Box maxWidth="1200px" m="0 auto">
        <form onSubmit={handleSubmit} className={s.SearchForm}>
          <input
            type="text"
            name="query"
            value={query}
            placeholder="movie search"
            className={s.SearchInput}
            onChange={e => setQuery(e.target.value)}
          />
          <button className={s.SearchButton} type="submit">
            <BsSearch className={s.searchIcon} />
          </button>
        </form>
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

        {searchMovies && (
          <ul className={s.SearchList}>
            {searchMovies.map(movie => (
              <li className={s.SearchItem} key={movie.id}>
                <NavLink to={`${movie.id}`} state={{ from: location }}>
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : defaultImg
                    }
                    alt={movie.title}
                  />
                </NavLink>
                <div className={s.SearchHoverText}>
                  <p className={s.SearchText}>{movie.original_title}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {loadMore && (
          <button className={s.LoadMore} onClick={handleButtonLoadMore}>
            <span className={s.buttonShadow}></span>
            <span className={s.buttonEdge}></span>
            <span className={s.buttonFront}>Load more</span>
          </button>
        )}
        <Toaster />
      </Box>
      <ScrollButton />
    </section>
  );
}
export default MiviesPage;
