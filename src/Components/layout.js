import React from 'react';
import { Link } from 'gatsby';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Jose Sanchez Gonzalez. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout;
