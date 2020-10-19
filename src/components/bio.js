import React from 'react';
import Social from 'components/social';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
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
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
        />
      )}
      {author?.name && (
        <div>
          <p>
            Hi, my name is <strong>{author.name}</strong>, {author?.summary || null}
          </p>
          <p>
            Actually I work on the professional's journey team at <strong><a rel="noreferrer" target="_blank" href="https://www.vagas.com.br/" title="VAGAS Tecnologia">VAGAS Tecnologia</a></strong>, a company focused on the development of scalable applications that help people to get employed and companies find the best collaborators.
          </p>
        </div>
      )}
      <Social />
    </div>
  );
};

export default Bio;
