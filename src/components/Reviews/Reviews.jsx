import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api';
import Loader from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  const [status, setStatus] = useState('idle');
  
  
  useEffect(() => {
  
    async function getReview() {
      try {
        setStatus('loading');
        const result = await getMovieReviews(id);
        setReview(result);
        setStatus('finished');
      }
      catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
        setStatus('idle');
      }
    }
    getReview();
  }, [id]);
  const { results } = review;

  return (
     results && results.length > 0 ? (
      <section>
        {results.map(({ author, content, id }) => {
          return (
            <div key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </div>
          );
        })}
    
        {status === 'loading' && <Loader />}
        <Toaster />
      </section>) : <p>Review not found</p>
  
  );
};



export default Reviews;