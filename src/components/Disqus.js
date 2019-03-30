import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const Disqus = ({ disqusConfig }) => {
  return (
    <div>
      <DiscussionEmbed shortname="reactforcats" config={disqusConfig} />
    </div>
  );
};

export default Disqus;
