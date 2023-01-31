import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Getdata from './data/Getdata';

import Home from './home/Home';
import Question from './pages/Question';
import Results from './results/Results';

function App() {
  const handleError = () => {
    document.querySelector('.question-whole').style =
      'display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem; font-weight: 700;';
    document.querySelector('.question-whole').innerHTML = 'Getting data...';
    setTimeout(() => {
      document.querySelector('.question-whole').innerHTML =
        'An Error Occured While Fetching Api: </br></br> Check network connection or try refreshing page';
    }, 2000);
  };
  const [question, setQuestion] = useState([]);
  // console.log('this questions log 1', question);

  const [pageNumber, SetPageNumber] = useState(0);

  const [answerTracker, setAnswerTracker] = useState({ passed: 0, failed: 0 });

  const updateAnswerTracker = (ans, correctAns) => {
    console.log(
      'updateAnswerTracker was entered, heres previous anserTracker',
      answerTracker
    );
    ans === correctAns
      ? setAnswerTracker({
          passed: answerTracker.passed + 1,
          failed: answerTracker.failed,
        })
      : setAnswerTracker({
          passed: answerTracker.passed,
          failed: answerTracker.failed + 1,
        });

    console.log('this the new answerTracker', answerTracker);
  };

  useEffect(() => {
    Getdata()
      .then((res) => setQuestion([...res]))
      .catch(() => {
        handleError();
      });
  }, []);
  // console.log('this is questions of 1', typeof question[1]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Home
                changePage={() => {
                  SetPageNumber((prevPage) => prevPage + 0);
                  console.log('this is home pageNumber', pageNumber);
                }}
                number={pageNumber}
              />
            }
          />
          <Route
            path="/question/:id"
            element={
              <Question
                pageIndex={0}
                QUESTION={question}
                changePage={() => SetPageNumber((prevPage) => prevPage + 1)}
                number={pageNumber}
                countAnswers={updateAnswerTracker}
              />
            }
          />
          <Route
            path="/results"
            element={<Results finalAnswers={answerTracker} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
