import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
// import { NavLink } from "react-router-dom";

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
          <Route path="movies" element={<div> Movies </div>}/>

      </Route>
      </Routes>
    </div>
  );
};
