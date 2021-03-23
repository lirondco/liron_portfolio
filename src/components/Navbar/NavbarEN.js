import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavbarEN.css';

export default function NavbarEN(props) {
  return (
    <div className='nav_EN' lang='EN'>
      <h4>
        <Link to='/'>Liron de Castro</Link>
      </h4>
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
