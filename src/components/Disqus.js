import React from 'react';
import Disqus from 'disqus-react';

const DisqusDiscussionEmbed = ({ disqusConfig }) => {
  return (
    <Disqus.DiscussionEmbed shortname="reactforcats" config={disqusConfig} />
  );
};

const DisqusCommentCount = ({ disqusConfig }) => {
  return <Disqus.CommentCount shortname="reactforcats" config={disqusConfig} />;
};

export { DisqusDiscussionEmbed, DisqusCommentCount };
