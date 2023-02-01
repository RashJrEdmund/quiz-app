/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import './results.css';
import { Link } from 'react-router-dom';

function Results({ finalAnswers }) {
  return (
    <div className="results-whole">
      <div className="results-page">
        <header>finalResults</header>
        <div className="score">
          <div className="rights">
            <p>Correct</p>
            <span>{finalAnswers.passed}</span>
          </div>
          <div className="wrongs">
            <p>Wrong</p>
            <span>{finalAnswers.failed}</span>
          </div>
        </div>

        <p className="my-review">
          {finalAnswers.passed < 5
            ? finalAnswers.passed < 2
              ? 'Nothing personal 😹 😂'
              : 'Better luck next time 😟'
            : finalAnswers.passed > 7
            ? 'You are an Excellent someone 👏😌'
            : 'Very good 😉'}
        </p>

        <p className="would-you-like">would You like to restart the quize?</p>

        <div className="option">
          <Link to="/question/0">
            <button type="button" className="retake">
              Restart
            </button>
          </Link>
          <Link to="/">
            <button type="button" className="retake">
              endQuize
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Results;
