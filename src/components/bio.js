import React from 'react';
import PropTypes from 'prop-types';
import Social from 'components/social';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Bio = ({ isComplete }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile.webp/" }) {
        childImageSharp {
          fixed(width: 150, height: 150, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const avatar = data?.avatar?.childImageSharp?.fixed;

  return (
    <div className="bio">
      {(avatar && isComplete) && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
        />
      )}
      {(author?.name && isComplete) && (
        <div>
          <p>
            Olá! Meu nome é <strong>{author.name}</strong>, {author?.summary || null}
          </p>
          <p>Sou um apreciador de café, escravo de 5 gatos, corredor amador nas horas livres e às vezes eu escrevo algumas coisas.</p>
        </div>
      )}
      <Social />
    </div>
  );
};

Bio.defaultProps = {
  isComplete: true,
};

Bio.propTypes = {
  isComplete: PropTypes.bool,
};

export default Bio;
