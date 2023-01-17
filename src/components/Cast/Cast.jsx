import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'api';
import Loader from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { Image, ActorList, CastInfo, ActorItem, ActorName } from './Cast.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { id } = useParams();
  const [credit, setCredit] = useState([]);
  const [status, setStatus] = useState('idle');
  
  
  useEffect(() => {
  
   async function getCast() {
      try {
        setStatus('loading');
        const result = await getMovieCredits(id);
        setCredit(result);
        setStatus('finished');
      }
      catch (error) {
       toast.error('Oops! Something went wrong! Please try again.');
        setStatus('idle');
      }
    }
     getCast();
  }, [id]);

  const { cast} = credit;

    return (
       <section>
      {cast && cast.length > 0 ? (
        <ActorList>
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <ActorItem key={id}>
                <div>
                  <Image
                    src={
                      profile_path
                        ? `${BASE_IMG_URL}${profile_path}`
                        : 'https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg'
                    }
                    alt="Actor"
                  />
                </div>
                <ActorName>{name}</ActorName>
                <CastInfo>{character}</CastInfo>
              </ActorItem>
            );
          })}
        </ActorList>
      ) : (
        <div>We don't have information about cast for this movies.</div>
      )}
      {status === 'loading' && <Loader />}
         <Toaster />
    </section>
  );
};



export default Cast;