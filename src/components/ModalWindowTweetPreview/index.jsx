import React, { useState } from "react";
import { CloseButton, Icons, Modal, Overlay, PreviewButton, ProfilePicture, TweetContainer, TweetDataContainer, TweetIconsContainer, TweetSection, TweetText } from "./ModalWindowTweetPreviewElements";
import {BsFillEyeFill} from "react-icons/bs"

const ModalWindowTweetPreview = () => {
  let [show, setShow] = useState(false);
  return (
    <>
      {show ? (
        <Overlay>
          <Modal>
            <CloseButton
              onClick={() => setShow((show = !show))}
            >
              X
            </CloseButton>
            
      
            <TweetSection>
            <h2>This is how your tweet will look like</h2>
                <div>
                    {JSON.parse(window.sessionStorage.getItem("tweetResult")).map((tweet, index) => (
                    <div key={index}>
                        <TweetContainer>
                            <ProfilePicture src="empty-profile.svg"></ProfilePicture>
                            <TweetDataContainer>
                                UserName @username
                                <TweetText>{tweet}</TweetText>
                                <TweetIconsContainer>
                                    <Icons src="twitter-comment-icon.svg"></Icons>
                                    <Icons src="twitter-retweet-icon.svg"></Icons>
                                    <Icons src="twitter-heart-icon.svg"></Icons>
                                </TweetIconsContainer>
                            </TweetDataContainer>
                        </TweetContainer>
                    </div>
                ))}
                </div>
            </TweetSection>
          </Modal>
        </Overlay>
      ) : undefined}
      <PreviewButton onClick={() => setShow((show = !show))}>PREVIEW <BsFillEyeFill/></PreviewButton>
    </>
  );
};

export default ModalWindowTweetPreview;
