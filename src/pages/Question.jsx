/* eslint-disable react/no-danger */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import './question.css';
import { Link } from 'react-router-dom';

function Question({ QUESTION, changePage, number, countAnswers }) {
  const checkAnswer = (value, index) => {
    const correcAnswer = QUESTION[index].correct_answer;
    console.log(
      'you clicked:',
      value,
      `${value === correcAnswer ? 'and' : 'but'} correct_answer is:`,
      correcAnswer
    );
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

          {console.log('this is Questions', QUESTION)}

          <div className="alternatives">
            <Link to={number === 9 ? '/results' : `/question/${number}`}>
              <button
                className="true_btn"
                value="True"
                type="button"
                onClick={(e) => {
                  checkAnswer(e.target.value, number);
                  countAnswers(e.target.value, QUESTION[number].correct_answer); // this is the function passed as parameter to update the anserCount
                  changePage();
                }}
              >
                True
              </button>
            </Link>

            <Link to={number === 9 ? '/results' : `/question/${number}`}>
              <button
                className="false"
                value="False"
                type="button"
                onClick={(e) => {
                  checkAnswer(e.target.value, number);
                  countAnswers(e.target.value, QUESTION[number].correct_answer); // this is the function passed as parameter to update the anserCount
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
}

export default Question;
