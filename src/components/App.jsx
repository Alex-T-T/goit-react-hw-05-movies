import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import Cast from "./Cast/Cast";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
// import MovieDetails from "./MovieDetails/MovieDetails";
// import Movies from "./Movies/Movies";
import MoviesSearch from "./Movies/MoviesSearch";
// import Reviews from "./Reviews/Reviews";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";

const Movies = lazy(() => import("./Movies/Movies"));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Reviews = lazy(()=> import('./Reviews/Reviews'))
const Cast = lazy(()=> import("./Cast/Cast"))


export const App = () => {

  return (
    <div
      style={{
        
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: '30px',
        fontSize: 24,
        color: '#010101'
      }}
    >

            {/* <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>

        </nav>
      </header> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies />}>
            <Route path="search" element={ <MoviesSearch/>} />
          </Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews/>} />
            <Route path="cast" element={ <Cast/>} />
          </Route>

      </Route>
      </Routes>
    </div>
  );
};
