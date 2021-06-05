import React from "react";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onIncrement, title }) => {
  return (
    <div>
      <h1 className={s.title}>{title}</h1>
      <button
        className={s.button}
        type="button"
        name={"good"}
        onClick={onIncrement}
      >
        Good
      </button>
      <button
        className={s.button}
        type="button"
        name={"neutral"}
        onClick={onIncrement}
      >
        Neutral
      </button>
      <button
        className={s.button}
        type="button"
        name={"bad"}
        onClick={onIncrement}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
