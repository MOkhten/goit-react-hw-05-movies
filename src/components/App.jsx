import { Routes, Route} from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from 'Pages/Home/Home';
import Movies from "./Movies/Movies";
import MovieDetails from "Pages/Home/MovieDetails/MovieDetails";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:id" element={<MovieDetails />} >
            {/* <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews/>} />  */}
            </Route>
          <Route path="*" element={<Home />} />
          </Route>
        </Routes>
     
    </div>
  );
};
