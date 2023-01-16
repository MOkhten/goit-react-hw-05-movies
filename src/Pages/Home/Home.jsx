import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'api';
import toast, { Toaster } from 'react-hot-toast';
import Loader  from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const getTrends = async () => {
      try {
        setStatus('loading');
        const { results: films } = await getTrendingMovies();
        setMovies(
          films.map(film => ({
          id: film.id,
            title: film.original_title,
        }))

        );
        setStatus('finished');
      }
      catch (error) {
       toast.error('Oops! Something went wrong! Please try again.');
        setStatus('idle');
      }
    }
     getTrends();
  }, []);

  return (
    <main >
      <h1>Trending today</h1>
      <ul>
        {movies?.map(film => (
          <li key ={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
         </li>
       ))}
         {status === 'loading' && <Loader />}
      <Toaster />

      </ul>
      
    </main>
  );
};

export default Home;