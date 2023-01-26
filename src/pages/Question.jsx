/* eslint-disable react/prop-types */
import './question.css';
import { Link } from 'react-router-dom';

function Question({ nextPath, pageHeader = '/question1' }) {
  return (
    <div className="questionPage">
      <header>{pageHeader}</header>
      <div className="questionSepSep">this is a sample question</div>

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
  );
}

export default Question;
