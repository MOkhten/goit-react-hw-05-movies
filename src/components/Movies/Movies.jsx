import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

 function Movies({onSubmit}) {
  const [query, setQuery] = useState('');
 const inputChange = e => setQuery(e.currentTarget.value);
  
 const handleSubmit = e => {
   e.preventDefault();
   if (query.trim() === '') {
      return toast.error('Please enter something');
    }
    onSubmit(query.toLowerCase());
    setQuery('');
  };

  return (

    < >
        <form  onSubmit={handleSubmit}>
          <button type="submit" >
            <span ><FiSearch/></span>
           </button>

           <input 
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={inputChange}
            value={query}
          />
        </form>
          <Toaster />
      </>
  )
}


Movies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Movies;