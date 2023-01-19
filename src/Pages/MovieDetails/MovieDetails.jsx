import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { getMovieById } from 'api';
import Loader from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { MovieCard, BtnArrow, Poster, MovieDescription, InfoTitle, Info, EditionalInfo, MovieLink } from './MovieDeatails.styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(MovieDetails);
   async function getMovies() {
      try {
        setStatus('loading');
          const result  = await getMovieById(id);
        setMovie(result);
        setStatus('finished');
      }
      catch (error) {
       toast.error('Oops! Something went wrong! Please try again.');
        setStatus('idle');
      }
    }
     getMovies();
  }, [id]);

  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <>
      <BtnArrow onClick={() => navigate(-1)}><AiOutlineArrowLeft />Back</BtnArrow>
    <MovieCard>
      
          <div>
              <Poster  src={poster_path
              ? `${BASE_IMG_URL}${poster_path}`
              : 'https://i.ibb.co/4ThsTsv/poster-coming-soon.jpg'} alt="movie poster" />
          </div>
          <MovieDescription>
      <h1>
         {title}
      </h1>
      <InfoTitle>
         User Score: <Info>{Number(vote_average * 10).toFixed()}%</Info>
      </InfoTitle>
      <InfoTitle>
        Overview: <Info>{overview}</Info>
      </InfoTitle>
      <InfoTitle>
                  Genres: <Info>{genres && genres.map(genre => genre.name).join(', ')}</Info>
      </InfoTitle>
      
          </MovieDescription>
        
      </MovieCard>
      <EditionalInfo>
        <h3>Editional info:</h3>
        <p>
          <MovieLink to='cast'>Cast</MovieLink>
        </p>
        <p><MovieLink to='reviews'>Reviews</MovieLink></p>
      </EditionalInfo>
      
       <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
          {status === 'loading' && <Loader />}
          <Toaster />
      </>
  );
};

export default MovieDetails;