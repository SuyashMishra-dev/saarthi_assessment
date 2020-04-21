import React from "react";

const Button = (props) => {
  // Destructure all fields
  const { type, classes, icon, title, submit } = props;
  return (
    <>
      <button type={type} className={classes} onClick={(e) => submit(e)}>
        {icon} {title}
      </button>
    </>
  );
};

export default Button;
