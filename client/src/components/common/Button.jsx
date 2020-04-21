import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        type={props.type}
        className={props.classes}
        onSubmit={(e) => props.submit()}
      >
        {props.title}
      </button>
    </>
  );
};

export default Button;
