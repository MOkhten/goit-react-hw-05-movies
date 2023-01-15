import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const getTreds = async () => {
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
     getTreds();
  }, []);

  return (
    <main >
      <ul movies={movies}>
         {status === 'loading' && <Loader />}
        <li></li>
      </ul>
       
     
      <Toaster />
    </main>
  );
};

export default Home;