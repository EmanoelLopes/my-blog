import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import SEO from 'components/seo';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1 className="main-heading">404: Not Found ¯\_(ツ)_/¯</h1>
      <p className="not-found-text">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
};

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
