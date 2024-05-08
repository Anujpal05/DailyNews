import React from 'react';
import "../App.css"
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="flex justify-between bg-black text-white fixed top-0 z-10 ">
      <div className="flex item-center p-3 w-screen" id="mainContainer">
        <Link className="text-xl" to="/">NewsDaily</Link>
        <div className="mx-6 " >
          <ul className='flex items-center displaybtn' id="navbarbtns">
            <li className='mx-2' ><NavLink to="/">Home</NavLink></li>
            <li className='mx-2' ><NavLink to='/sports'>Sports</NavLink></li>
            <li className='mx-2' ><NavLink to="/entertainment">Entertainment</NavLink></li>
            <li className='mx-2' ><NavLink to="/health">Health</NavLink></li>
            <li className='mx-2' ><NavLink to="/science">Science</NavLink></li>
            <li className='mx-2' ><NavLink to="/business">Business</NavLink></li>
            <li className='mx-2' ><NavLink to="/technology">Technology</NavLink></li>
          </ul>
        </div>
      </div>
      <span className='flex items-center mx-7 text-2xl display '><i className="fa-solid fa-list"></i> </span>
    </nav>


  );
}

export default Navbar
