import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black text-white">
      <div className="flex item-center mx-2">
        <a className="navbar-brand text-white" href="/">NewsDaily</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="flex" id="navbarNav">
          <ul className='flex justify-center items-center '>
            <li className='mx-2' ><a href="/">Home</a></li>
            <li className='mx-2' ><a href='/sports'>Sports</a></li>
            <li className='mx-2' ><a href="/entertainment">Entertainment</a></li>
            <li className='mx-2' ><a href="/health">Health</a></li>
            <li className='mx-2' ><a href="/science">Science</a></li>
            <li className='mx-2' ><a href="/business">business</a></li>
            <li className='mx-2' ><a href="/technology">Technology  </a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
