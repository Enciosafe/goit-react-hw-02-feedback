import React from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import s from "./Section.module.css";
import PropTypes from "prop-types";

const Section = ({ state, options: { onIncrement } }) => {
  return (
    <>
      <FeedbackOptions
        onIncrement={onIncrement}
        title="Please leave feedback"
      />
      <h2 className={s.title}>Statistics</h2>
      {state.good + state.neutral + state.bad === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Statistics good={state.good} neutral={state.neutral} bad={state.bad} />
      )}
    </>
  );
};

export default Section;

Section.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  message: PropTypes.string,
  title: PropTypes.string,
};
