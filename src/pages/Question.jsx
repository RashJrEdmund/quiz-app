/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import './question.css';
import { Link } from 'react-router-dom';

function Question({ nextPath, pageHeader = '/question1' }) {
  const URL = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;
  let data;
  let errorMessage = '';
  fetch(URL)
    .then((response) => {
      response.json();
      data = response;
      console.log('this is data', data);
      return data;
    })
    .catch((error) => {
      errorMessage = error;
      document.querySelector('.question-whole').style =
        'display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem; font-weight: 700;';

      document.querySelector('.question-whole').innerHTML = 'Getting data...';
      setTimeout(() => {
        document.querySelector('.question-whole').innerHTML =
          'An Error Occured While Fetching Api: </br></br> Check network connection and try refreshing page';
      }, 3000);
      return errorMessage;
    });

  console.log('this data', typeof data);

  return (
    <div className="question-whole">
      {errorMessage === '' ? (
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
      ) : (
        (document.querySelector('.question-whole').innerHTML = 'errorMessage')
      )}
    </div>
  );
}

export default Question;
