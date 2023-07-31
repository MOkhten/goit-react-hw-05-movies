import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api';
import toast, { Toaster } from 'react-hot-toast';
import Loader from 'components/Loader/Loader';
import { MovieItem, Item, List, Img  } from './Home.styles';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const getTrends = async () => {
      try {
        setStatus('loading');
        const { results: films } = await getTrendingMovies();
        console.log(films);
        setMovies(
          films.map(film => ({
            id: film.id,
            title: film.title,
            poster_path: film.poster_path,
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

  const imgUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    <main >
      <h1>Trending today</h1>
      <List >
        {movies?.map(film => (
          <Item key ={film.id}>
            <MovieItem to={`/movies/${film.id}`}>
             
              <Img src={`${imgUrl}${film.poster_path}`} alt={film.title} /> </MovieItem>
             <p>{film.title}</p>
         </Item>
       ))}
         {status === 'loading' && <Loader />}
      <Toaster />

      </List>
      
    </main>
  );
};

export default Home;