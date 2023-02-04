/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-expressions */
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Getdata from './data/Getdata';

import Home from './home/Home';
import Question from './pages/Question';
import Results from './results/Results';
import { Myquestions } from './context/Context';

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

  const [pageNumber, SetPageNumber] = useState(0);

  const [answerTracker, setAnswerTracker] = useState({ passed: 0, failed: 0 });

  const changePage = () => {
    pageNumber === 9
      ? SetPageNumber(0)
      : SetPageNumber((prevPage) => prevPage + 1);
  };

  const updateAnswerTracker = (ans, correctAns) => {
    if (ans === correctAns) {
      setAnswerTracker({
        passed: answerTracker.passed + 1,
        failed: answerTracker.failed,
      });
    } else {
      setAnswerTracker({
        passed: answerTracker.passed,
        failed: answerTracker.failed + 1,
      });
    }
  };

  useEffect(() => {
    Getdata()
      .then((res) => setQuestion([...res]))
      .catch(() => {
        handleError();
      });
  }, []);

  return (
    <div className="App">
      <Myquestions.Provider
        value={{
          question,
          changePage,
          pageNumber,
          updateAnswerTracker,
          answerTracker,
          setAnswerTracker,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="/question/:id"
              element={
                // element={Question} use use Context here
                <Question />
              }
            />
            <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </Myquestions.Provider>
    </div>
  );
}

export default App;
