import React from "react";
import "./modal.css";
import BlurrBg from "./BlurrBg";
import Modalcontainer from "./Modalcontainer";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div>
      <>
        {isOpen && (
          <>
            <BlurrBg />
            <Modalcontainer isOpen={isOpen} onClose={onClose} />
          </>
        )}
      </>
    </div>
  );
};

export default Modal;
