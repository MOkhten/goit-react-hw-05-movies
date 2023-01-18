import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import SearchBar from 'components/SearchBar/SearchBar';
import { getSearchMovies } from 'api';
import Loader from 'components/Loader/Loader';


function Movies() {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovie] = useState([]);
    const [status, setStatus] = useState('idle');
    const query = searchParams.get('query');

useEffect(() => {
     if (query === '') {
      setStatus('idle');
      return;
    }
  
    const fetchData = async () => {
      try {
        setStatus('loading');
        const { results } = await getSearchMovies(query);
        if (results.length === 0) {
          toast.error(
            'Sorry, there are no films matching your search query. Please try again.'
          );
        }
        setMovie( results);
        setStatus('finished');
      }
      catch (error) {
       toast.error('Oops! Something went wrong! Please try again.');
        setStatus('idle');
      }
    }
     fetchData();
    
    }, [query]);
    

    const changeFilter = query => {
    setSearchParams( { query: query });
    };
    
    return (
    <>
       <SearchBar  onSubmit={changeFilter} />
            
            <ul>
                {movies?.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
                        </Link>
                        </li>
          ))}
    
            </ul>
            {status === 'loading' && <Loader />}
            <Toaster />
            
        
    </>
  )
};

export default Movies;
