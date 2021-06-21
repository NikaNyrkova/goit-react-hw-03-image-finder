import React from "react";

import s from "./Button.module.css";

const Button = ({handleClickLoadMore}) => {
  return (
      <button
          type="button"
          className={s.Button}
          onClick={handleClickLoadMore}
      >
      Load more
    </button>
  );
};

export default Button;
