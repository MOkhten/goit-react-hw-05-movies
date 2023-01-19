import { Routes, Route} from "react-router-dom";
import { lazy } from 'react';
import Layout from "./Layout/Layout";


const Home = lazy(() => import('Pages/Home/Home'));
const Movies = lazy(() => import("Pages/Movies/Movies"));
const MovieDetails = lazy(() => import("Pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

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
