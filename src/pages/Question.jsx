/* eslint-disable react/no-danger */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import './question.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Question({
  nextPath,
  pageIndex = 1,
  QUESTION = [
    { question: 'koki na life' },
    { question: 'garri na joy' },
    { question: 'chai' },
  ],
}) {
  // eslint-disable-next-line no-unused-vars
  return (
    <div className="question-whole">
      {QUESTION.length > 0 && (
        <div className="questionPage">
          <header> Question {pageIndex + 1} out of 10</header>
          {/* <p
          className="questionSepSep"
          dangerouslySetInnerHTML={{ __html: QUESTION[pageIndex].question }}
        /> */}
          <p
            className="questionSepSep"
            dangerouslySetInnerHTML={{ __html: QUESTION[pageIndex].question }}
          />

          <div className="alternatives">
            <Link to={nextPath}>
              <button className="true_btn" type="button">
                True
              </button>
            </Link>

            <Link to={nextPath}>
              <button className="false" type="button">
                False
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
