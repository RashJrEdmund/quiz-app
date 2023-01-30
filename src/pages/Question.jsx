/* eslint-disable react/no-danger */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import './question.css';
import { Link } from 'react-router-dom';

function Question({ QUESTION, changePage, number }) {
  const checkAnswer = (value, index) => {
    if (QUESTION[index].correct_answer === value) {
      console.log('correct Answer');
    }
  };
  return (
    <div className="question-whole">
      {QUESTION.length > 0 && (
        <div className="questionPage">
          <header> Question {number + 1} out of 10</header>
          {/* <p
          className="questionSepSep"
          dangerouslySetInnerHTML={{ __html: QUESTswered either true or false where for each correct answer, you score a ION[number].question }}
        /> */}
          <p
            className="questionSepSep"
            dangerouslySetInnerHTML={{ __html: QUESTION[number].question }}
          />

          <div className="alternatives">
            <Link to={number === 9 ? '/results' : `/question/${number}`}>
              <button
                className="true_btn"
                id="btn"
                value="True"
                type="button"
                onClick={(e) => {
                  changePage;
                  checkAnswer(e.target.value, number);
                  console.log(e.target.value);
                }}
              >
                True
              </button>
            </Link>

            <Link to={number === 9 ? '/results' : `/question/${number}`}>
              <button className="false" type="button" onClick={changePage}>
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
