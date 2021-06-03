import React from "react";
import s from "./FeedbackOptions.module.css"

const FeedbackOptions = ({onIncrementGood, onIncrementNeutral, onIncrementBad, title}) => {
    return <div>
        <h1 className={s.title}>{title}</h1>
            <button className={s.button} type="button" onClick={onIncrementGood}>Good</button>
            <button className={s.button} type="button" onClick={onIncrementNeutral}>Neutral</button>
            <button className={s.button} type="button" onClick={onIncrementBad}>Bad</button>
    </div>
}


export default FeedbackOptions