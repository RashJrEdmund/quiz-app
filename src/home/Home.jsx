/* eslint-disable react/prop-types */
import './home.css';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Myquestions } from '../context/Context';

function Home() {
  const { areThereQuestions } = useContext(Myquestions);
  const navigate = useNavigate();

  const toQuestions = () => {
    navigate('/question/0');
  };

  const handleError = () => {
    if (areThereQuestions)
    document.querySelector('.question-whole').style =
      'display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem; font-weight: 700;';
    document.querySelector('.question-whole').innerHTML = 'Getting data...';
    setTimeout(() => {
      document.querySelector('.question-whole').innerHTML =
        'An Error Occured While Fetching Api: </br></br> Check network connection or try refreshing page';
    }, 2000);
  };

  useEffect(() => {
    setTimeout(handleError, 2000);
  }, []);

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
          onClick={() => {
            toQuestions();
          }}
        >
          Advance
        </button>
      </div>
    </div>
  );
}

export default Home;
