import React from 'react';

import Layout from '../components/layout/Layout';
import ContactForm from '../components/ContactForm';
import SEO from '../components/seo';

function contact() {
  return (
    <Layout>
      <SEO title="Contact form" />
      <ContactForm />
    </Layout>
  );
}

export default contact;
