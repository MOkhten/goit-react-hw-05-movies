import { useState } from 'react';
import PropTypes from 'prop-types';
// import css from './Seachbar.module.css';
import { FiSearch } from 'react-icons/fi';

 function Movies({onSubmit}) {
  const [search, setSearch] = useState('');
 const inputChange = e => setSearch(e.currentTarget.value);
  
 const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search.toLowerCase());
    setSearch('');
  };

  return (

    <header >
        <form  onSubmit={handleSubmit}>
          <button type="submit" >
            <span ><FiSearch/></span>
           </button>

           <input 
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={inputChange}
            value={search}
          />
        </form>
          
      </header>
  )
}


Movies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Movies;