import React, { useState } from "react";
import { CloseButton, Icons, Modal, Overlay, PreviewButton, ProfilePicture, TweetContainer, TweetDataContainer, TweetIconsContainer, TweetSection, TweetText } from "./ModalWindowTweetPreviewElements";
import {BsFillEyeFill} from "react-icons/bs"

const ModalWindowTweetPreview = ({modalError}) => {
  let [show, setShow] = useState(true);
  return (
    <>
    {modalError ? 
      <TweetSection>
      <h2>This is how your tweet will look like</h2>
          <div>
              <div>
                  <TweetContainer>
                      <ProfilePicture src="empty-profile.svg"></ProfilePicture>
                      <TweetDataContainer>
                          UserName @username
                          <TweetText></TweetText>
                          <TweetIconsContainer>
                              <Icons src="twitter-comment-icon.svg"></Icons>
                              <Icons src="twitter-retweet-icon.svg"></Icons>
                              <Icons src="twitter-heart-icon.svg"></Icons>
                          </TweetIconsContainer>
                      </TweetDataContainer>
                  </TweetContainer>
              </div>
          </div>
      </TweetSection>
 : undefined}
    </>
  );
};

export default ModalWindowTweetPreview;
