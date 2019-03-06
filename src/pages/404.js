import React from 'react';

import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="404: Not Found" />
        <h2>Not Found</h2>
        <p>You just hit a route that does not exist.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
