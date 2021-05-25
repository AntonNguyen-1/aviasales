import React from "react";

interface ModalSuccessProps {
  handleOnClick: () => void;
}

export default function ModalSuccess({ handleOnClick }: ModalSuccessProps) {
  return (
    <div className="success-modal">
      <h3 className="title">Great</h3>
      <p className="success-text"> Purchase was successful</p>
      <button onClick={handleOnClick} className="btn btn-close" type="button">
        Close
      </button>
      <button
        onClick={handleOnClick}
        className="btn btn-cross-close"
        type="button"
      >
        x
      </button>
    </div>
  );
}
