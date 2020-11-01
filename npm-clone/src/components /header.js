import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className='header1'>
        <a  href='/'
            className='headerLinks'>
            Products
        </a>
        <a  href='/'
            className='headerLinks'>
            Pricing
        </a>
        <a  href='/'
            className='headerLinks'>
            Documentation
        </a>
        <a  href='/'
            className='headerLinks'>
            Community 
        </a>

      </div>
      <div className='header2'>
    
  
      <span className='npm'>npm</span>

      <div className="inputGroup">
      <IconContext.Provider value={{size: '1.5em'}}>
        <span className='icon'> <IoIosSearch /> </span>
        </IconContext.Provider>
        <input 
          type="text"
          placeholder='Search packages'>
        </input>
      </div>
  
        <button 
          type='button'
          className='searchBtn'>
          Search
        </button>
        <button 
          type='button'
          className='signUpBtn'>
          Sign Up
        </button>
        <button 
          type='button'
          className='signInBtn'>
          Sign In
        </button>

    </div>
    </div>
    );
}
 
export default Header;