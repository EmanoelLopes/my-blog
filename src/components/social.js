import React from 'react';

const Social = () => {
  const social = {
    links: {
      github: 'https://github.com/EmanoelLopes',
      linkedin: 'https://www.linkedin.com/in/emanoel-lopes-64100839/',
      codepen: 'https://codepen.io/emanoellopes',
      devto: 'https://dev.to/emanoellopes',
      twitter: 'https://twitter.com/mallander',
    },
    icons: {
      github: 'bx bxl-github',
      linkedin: 'bx bxl-linkedin',
      codepen: 'bx bxl-codepen',
      devto: 'bx bxl-dev-to',
      twitter: 'bx bxl-twitter',
    }
  };

  return (
    <div className="social">
      <ul>
        {Object.values(social.links).map((link, index) => (
          <li key={Math.round(Math.random() * 10000)}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={Object.keys(social.links)[index]}
            >
              <i className={Object.values(social.icons)[index]}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
