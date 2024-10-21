import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <header>
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I’m Jose Sanchez Gonzalez, a passionate software engineer with a
          focus on web development, cloud platforms, and AI. Explore my
          projects, learn more about me, or get in touch.
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/projects">View My Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
};

export default IndexPage;