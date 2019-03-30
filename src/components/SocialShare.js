import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  TelegramIcon
} from 'react-share';
import styled from 'styled-components';

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  & > .SocialMediaShareButton {
    cursor: pointer;
    transform: scale(0.9);
    transition: all 0.5s;
    &:hover {
      transform: scale(1);
    }
  }

  @media only screen and (min-width: 1000px) {
    position: fixed;
    right: 0%;
    top: 50%;
    transform: translateY(-50%);
    flex-direction: column;
    }
  }
`;

const SocialShare = ({ shareUrl, shareTitle, shareTags, shareQuote }) => {
  return (
    <SocialContainer>
      <FacebookShareButton url={shareUrl} quote={shareQuote}>
        <FacebookIcon round={true} size={48} />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={shareTitle}
        hashtags={shareTags}
      >
        <TwitterIcon round={true} size={48} />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl} title={shareTitle}>
        <LinkedinIcon round={true} size={48} />
      </LinkedinShareButton>
      <WhatsappShareButton url={shareUrl} title={shareTitle}>
        <WhatsappIcon round={true} size={48} />
      </WhatsappShareButton>
      <TelegramShareButton url={shareUrl} title={shareTitle}>
        <TelegramIcon round={true} size={48} />
      </TelegramShareButton>
    </SocialContainer>
  );
};

export default SocialShare;
