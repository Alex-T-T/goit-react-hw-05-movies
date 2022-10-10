import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from '../../pages/Home/Home';
import Layout from "../Layout/Layout";
import MoviesSearch from "../MoviesSearch/MoviesSearch";
import { Container } from "./App.styled";
// // ==========
// // lazy imports
// // ==========
const Movies = lazy(() => import("../../pages/Movies/Movies"));
const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Reviews = lazy(()=> import('../Reviews/Reviews'))
const Cast = lazy(()=> import("../Cast/Cast"))


export const App = () => {

  return (
    <Container>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="movies" element={<Movies />}>
            <Route path="search" element={ <MoviesSearch/>} />
          </Route>

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews/>} />
            <Route path="cast" element={ <Cast/>} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />``

        </Route>
      </Routes>

    </Container>
  );
};
