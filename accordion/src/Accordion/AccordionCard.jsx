import React, { useState } from "react";
import classes from "./accordioncard.module.css";
const AccordionCard = (props) => {
  const { question, answer, key } = props;
  const [show, setShow] = useState(false);

  const showCard = () => {
    setShow(!show);
  };
  return (
    <div className={classes.container} key={key}>
      <div className={classes.question}>{question}</div>
      {show ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          onClick={showCard}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      ) : (
        <svg
          onClick={showCard}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      )}

      <div className={classes.answer}>{show ? <p>{answer}</p> : null} </div>
    </div>
  );
};

export default AccordionCard;
