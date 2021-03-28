import React, { useState, useEffect, useMemo } from "react";
import ReactModal from "react-modal";

interface Props {
  isOpen: boolean;
  children: React.ReactElement;
  setIsOpen: () => void;
}

export default function Modal(props: Props) {
  const { isOpen } = props;
  const [modalStatus, setModalStatus] = useState(isOpen);
  const isOpenMemo = useMemo(() => isOpen, [isOpen]);

  useEffect(() => {
    setModalStatus(isOpenMemo);
  }, [isOpenMemo]);

  const { children, setIsOpen } = props;

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
}
