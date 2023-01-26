import './results.css';
import { Link } from 'react-router-dom';

function Results(rights = 5, wrongs = 5) {
  return (
    <div className="results-page">
      <header>finalResults</header>
      <div className="score">
        <div className="rights">{rights}</div>
        <div className="wrongs">{wrongs}</div>
      </div>
      <div className="final-total">your scored</div>

      <div className="option">
        would You like to retake the quize?
        <div className="sub-options">
          <Link to="/">
            <button type="button" className="retake">
              Retake
            </button>
          </Link>
          <Link to="/">
            <button type="button" className="retake">
              endQuize
            </button>
          </Link>
        </div>
        `
      </div>
    </div>
  );
}

export default Results;
