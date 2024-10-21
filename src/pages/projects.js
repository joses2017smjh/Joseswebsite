import React from 'react';

const projects = [
  {
    title: 'Stock Analysis and Crypto Tracking App',
    description: 'A web app built with React, Flask, and Chart.js to track stock and crypto prices with real-time data and sentiment analysis.',
    githubLink: 'https://github.com/joses2017smjh/stock-analysis-app',
    liveDemo: 'https://your-live-demo-link.com',  // Add live link if available
    image: '/images/project1.png',
  },
  {
    title: 'Monte Carlo Simulation',
    description: 'A simulation using CUDA to estimate the probability of a golf ball landing in a hole after rolling off a ski jump.',
    githubLink: 'https://github.com/joses2017smjh/monte-carlo-simulation',
    liveDemo: '', // Leave blank if no demo is available
    image: '/images/project2.png',
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <main>
      <h1>My Projects</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%' }} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>Live Demo</a>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
