import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LinkedIn from './linkedin.png'
import Github from './GitHub.png'
import Twitter from './twitter.png'
import './NavbarEN.css';

export default function NavbarEN(props) {
  return (
    <div className='nav_EN' lang='EN'>
      <h4>
        <Link to='/'>Liron de Castro</Link>
      </h4> 
      <div className='social_logos'>
          <a href='https://www.linkedin.com/in/liron-de-castro/'>
              <img src={LinkedIn} alt='LinkedIn logo' />
          </a>
          <a href='https://github.com/lirondco/'>
              <img src={Github} alt='Github Logo' />
          </a>
          <a href='https://twitter.com/lirondecastro'>
              <img src={Twitter} alt='Twitter logo' />
          </a>
      </div>
      <hr />
      <ul className='nav_content_EN'>
        <li key='projects_EN'>
            <NavLink activeClassName='selected_nav_EN' to='/projects'>
                Projects
            </NavLink>
        </li>
        <li key='about_EN'>
            <NavLink activeClassName='selected_nav_EN' to='/about'>
                About
            </NavLink>
        </li>
        <li key='contact_EN'>
            <NavLink activeClassName='selected_nav_EN' to='/contact'>
                Contact
            </NavLink>
        </li>
        <li key='ivrit_EN'>
            <button type='button' onClick={props.handleChangeLang} lang='HE' dir='rtl'>
                עברית
            </button>
        </li>
      </ul>
    </div>
  );
}
