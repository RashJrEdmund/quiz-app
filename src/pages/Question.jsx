/* eslint-disable react/no-danger */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import './question.css';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Myquestions } from '../context/Context';

function Question() {
  const { question, updateAnswerTracker } = useContext(Myquestions);
  const navigate = useNavigate();
  const params = useParams();
  const pageIndex = +params.id; // this is same as saying pageIndex = parseInt(params.id). it is neccessary to convert to a number bcs the value in the object returned by params is a STRING

  const toNextQuestions = () => {
    navigate(pageIndex === 9 ? '/results' : `/question/${pageIndex + 1}`);
  };

  return (
    <div className="question-whole">
      {question.length < 1 ? (
        <p className="loading_text">Loading . . .</p>
      ) : (
        <div className="questionPage">
          <p className="category">
            category: <span> {question[pageIndex].category}</span>
          </p>
          <header> Question {pageIndex + 1} out of 10</header>
          <p
            className="questionSepSep"
            dangerouslySetInnerHTML={{
              __html: question[pageIndex].question,
            }}
          />

          <div className="alternatives">
            <button
              className="true_btn"
              value="True"
              type="button"
              onClick={(e) => {
                updateAnswerTracker(
                  e.target.value,
                  question[pageIndex].correct_answer
                ); // this is the function passed as parameter to update the anserCount
                toNextQuestions();
              }}
            >
              True
            </button>

            <button
              className="false_btn"
              value="False"
              type="button"
              onClick={(e) => {
                updateAnswerTracker(
                  e.target.value,
                  question[pageIndex].correct_answer
                ); // this is the function passed as parameter to update the anserCount
                toNextQuestions();
              }}
            >
              False
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
