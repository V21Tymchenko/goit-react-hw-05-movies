import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from 'theme/box';
import s from './Navigation.module.css';
// import { StyledLink, NavigationItem } from './Navigation.styled';

const ACTIVE_KEY = 'activePage';
export const Navigation = () => {
  const [active, setActive] =
    useState(() => JSON.parse(window.localStorage.getItem(ACTIVE_KEY))) ?? null;

  useEffect(() => {
    window.localStorage.setItem(ACTIVE_KEY, JSON.stringify(active));
  }, [active]);

  return (
    <Box maxWidth="1200px" m="0 auto" pt="30px" pb="30px" pl="50px" pr="50px">
      <nav>
        <ul className={s.NavigationList}>
          <li>
            <NavLink
              onClick={() => setActive(1)}
              className={active === 1 ? s['activeLink'] : s['StyledLink']}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setActive(2)}
              className={active === 2 ? s['activeLink'] : s['StyledLink']}
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </Box>
  );
};

// className={activeFilmIndex === 2 ? s['active'] : s['StyledLink']}
