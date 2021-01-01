import React from 'react';
import PropTypes from 'prop-types';
import Social from 'components/social';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Bio = ({ isComplete }) => {
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
          <p>
            Atualmente trabalho no time de Jornada do Profissional na <strong><a rel="noreferrer" target="_blank" href="https://www.vagas.com.br/" title="VAGAS Tecnologia">VAGAS Tecnologia</a></strong>, empresa de tecnologia focada no desenvolvimento de aplicações escaláveis que ajudam pessoas a conseguir emprego e empresas a contratar os melhores colaboradores.
          </p>
          <p>Sou um apreciador de café, escravo de 5 gatos e corredor amador nas horas livres.</p>
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
