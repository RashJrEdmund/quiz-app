/* eslint-disable react/prop-types */
import './results.css';
import { Link } from 'react-router-dom';

function Results({ rights = 5, wrongs = 5 }) {
  return (
    <div className="results-whole">
      <div className="results-page">
        <header>finalResults</header>
        <div className="score">
          <div className="rights">
            <p>Correct</p>
            <span>{rights}</span>
          </div>
          <div className="wrongs">
            <p>Wrong</p>
            <span>{wrongs}</span>
          </div>
        </div>

        <p className="would-you-like">would You like to restart the quize?</p>

        <div className="option">
          <Link to="/question1">
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
