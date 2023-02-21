import React, { useState } from 'react';
import { Overlay, Modal, CloseButton, Title } from './ModalElements';

export const ModalWindow = ({ modalError, title, modalHandler, children  }) => {

  return (
    <>
      {modalError ? (
        <>
        <Overlay>
          <Modal>
            <CloseButton onClick={() => modalHandler(false)}>
              X
            </CloseButton>
            <Title>{title}</Title>
            {children}
          </Modal>
        </Overlay>
        </>
      ) : undefined}
    </>
  );
};
