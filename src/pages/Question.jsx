/* eslint-disable react/prop-types */
import './question.css';
import { Link } from 'react-router-dom';

function Question({ nextPath, pageHeader = '/question1' }) {
  return (
    <div className="question-whole">
      <div className="questionPage">
        <header>{pageHeader} out of 10</header>
        <p className="questionSepSep">this is a sample question</p>

        <div className="alternatives">
          <button className="true_btn" type="button">
            True
          </button>
          <button className="false" type="button">
            False
          </button>
        </div>

        <Link to={nextPath}>
          <button className="nextPage" type="button">
            Next Question
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Question;
