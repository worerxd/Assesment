import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav__container">
      <Link to="/">
        <img
          src="http://www.edutic.pe/galeria/storage/cache/images/000/003/3052265-blue-letter-lowercase-w,medium.2x.1532896965.png"
          alt=""
          className="nav__logo"
        />
      </Link>
      <ul className="nav__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/questions">Questions</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
