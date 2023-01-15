import { Routes, Route} from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from './Home/Home'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews/>} />
            </Route> */}
          <Route path="*" element={<Home />} />
          </Route>
        </Routes>
     
    </div>
  );
};
