import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
// import { Home } from '../pages/HomePage/HomePage';
// import { MiviesPage } from 'pages/MoviesPage/MoviesPage';
// import { FilmDetailsPage } from 'pages/FilmDatailsPage/FilmDetailsPage';
// import CostPage from 'pages/CastRage/CastPage';
// import Reviews from 'pages/Reveiws/Reviews';

const Home = lazy(() => import('../pages/HomePage/HomePage'));
const MiviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const FilmDetailsPage = lazy(() =>
  import('../pages/FilmDatailsPage/FilmDetailsPage')
);
const CostPage = lazy(() => import('../pages/CastRage/CastPage'));
const Reviews = lazy(() => import('../pages/Reveiws/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<MiviesPage />} />
          <Route path="/movies/:movieId" element={<FilmDetailsPage />}>
            <Route path="cast" element={<CostPage />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
