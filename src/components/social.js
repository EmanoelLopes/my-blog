import React from 'react';
import Icon from 'components/icon';

const Social = () => {
  const social = {
    links: {
      github: 'https://github.com/EmanoelLopes',
      linkedin: 'https://www.linkedin.com/in/emanoel-lopes-64100839/',
      devto: 'https://dev.to/emanoellopes',
      email: 'mailto:emanoel.lopes.web@gmail.com',
    },
    icons: {
      github: 'github',
      linkedin: 'linkedin',
      devto: 'devTo',
      email: 'envelope',
    },
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
              <Icon name={Object.values(social.icons)[index]} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
