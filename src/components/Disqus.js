import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const Disqus = ({ disqusConfig }) => {
  return (
    <div>
      <DiscussionEmbed
        shortname={process.env.DISQUS_SHORTNAME}
        config={disqusConfig}
      />
    </div>
  );
};

export default Disqus;
