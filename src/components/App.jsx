import { Routes, Route} from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from 'Pages/Home/Home';
import Movies from "./Movies/Movies";
import MovieDetails from "Pages/MovieDetails/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:id" element={<MovieDetails />} >
            <Route path="/movies/:id/cast" element={<Cast />} />
            <Route path="/movies/:id/reviews" element={<Reviews/>} /> 
            </Route>
          <Route path="*" element={<Home />} />
          </Route>
        </Routes>
     
    </div>
  );
};
