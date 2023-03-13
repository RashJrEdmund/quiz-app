/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import './home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="whole">
      <div className="homePage">
        <header className="title">
          <span>ApI sEaRcH </span> <span>QUIZ</span>
        </header>
        <div className="homepage__body">
          <header>Guide / Instructions</header>
          <ul>
            <li>
              The question listed are ment to be answered either true or false
              where for each correct answer, you score a point.
            </li>
            <li>
              The sum of your results will be displayed only at the end of the
              quize only after the quize is over
            </li>
            <li>Reason out your answer well and make the right choice</li>
            <li>
              Each time you move onto a next page, your previous final choice is
              considered and there is no way of going back to it
            </li>
            <li>
              <span className="good-luck">Best of Luck</span>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="advance-btn"
          onClick={() => navigate('/question/0')}
        >
          Advance
        </button>
      </div>
    </div>
  );
}

export default Home;
