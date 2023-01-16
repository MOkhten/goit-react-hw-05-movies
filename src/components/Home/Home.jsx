import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const getTrends = async () => {
      try {
        setStatus('loading');
        const { results } = await getTrendingMovies();
        setMovies(results);
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
      <ul movies={movies}/>
         {status === 'loading' && <Loader />}
      <Toaster />
    </main>
  );
};

export default Home;