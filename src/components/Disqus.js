import React from 'react';
import { DiscussionEmbed, CommentCount } from 'disqus-react';

const DisqusDiscussionEmbed = ({ disqusConfig }) => {
  return <DiscussionEmbed shortname="reactforcats" config={disqusConfig} />;
};

const DisqusCommentCount = ({ disqusConfig }) => {
  return <CommentCount shortname="reactforcats" config={disqusConfig} />;
};

export { DisqusDiscussionEmbed, DisqusCommentCount };
