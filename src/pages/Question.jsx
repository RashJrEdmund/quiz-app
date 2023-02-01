/* eslint-disable react/no-danger */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import './question.css';
import { Link, useParams } from 'react-router-dom';
import { QuestionsConsumer } from '../context/Context';

function Question() {
  const params = useParams();
  const pageIndex = +params.id; // this is same as saying pageIndex = parseInt(params.id). it is neccessary to convert to a number bcs the value in the object returned by params is a STRING

  return (
    <QuestionsConsumer>
      {({ question, changePage, updateAnswerTracker }) => {
        return (
          <div className="question-whole">
            {question.length > 0 && (
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
                  <Link
                    to={
                      pageIndex === 9
                        ? '/results'
                        : `/question/${pageIndex + 1}`
                    }
                  >
                    <button
                      className="true_btn"
                      value="True"
                      type="button"
                      onClick={(e) => {
                        updateAnswerTracker(
                          e.target.value,
                          question[pageIndex].correct_answer
                        ); // this is the function passed as parameter to update the anserCount
                        changePage();
                      }}
                    >
                      True
                    </button>
                  </Link>

                  <Link
                    to={
                      pageIndex === 9
                        ? '/results'
                        : `/question/${pageIndex + 1}`
                    }
                  >
                    <button
                      className="false"
                      value="False"
                      type="button"
                      onClick={(e) => {
                        updateAnswerTracker(
                          e.target.value,
                          question[pageIndex].correct_answer
                        ); // this is the function passed as parameter to update the anserCount
                        changePage();
                      }}
                    >
                      False
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      }}
    </QuestionsConsumer>
  );
}

export default Question;
