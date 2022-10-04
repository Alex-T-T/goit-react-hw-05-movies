import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<div> Home</div>}></Route>
          <Route path="movies" element={<div> Movies</div>}></Route>

      </Route>
      </Routes>
    </div>
  );
};
