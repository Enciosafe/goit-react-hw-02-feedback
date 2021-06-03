import React from "react";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 / countTotalFeedback()) * good);
  };

  return (
    <div>
      <p className={s.title}>
        Good: <span>{good}</span>{" "}
      </p>
      <p className={s.title}>
        Neutral: <span>{neutral}</span>
      </p>
      <p className={s.title}>
        Bad: <span>{bad}</span>
      </p>
      <p className={s.title}>
        Total: <span>{countTotalFeedback()}</span>
      </p>
      <p className={s.title}>
        Positive Feedback: <span>{countPositiveFeedbackPercentage()}%</span>
      </p>
    </div>
  );
};

export default Statistics;
