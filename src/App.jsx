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
  const [question, setQuestion] = useState([]);

  const [areThereQuestions, setAreThereQuestions] = useState(false);

  const [answerTracker, setAnswerTracker] = useState({ passed: 0, failed: 0 });

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
      .then((res) => {
        setQuestion([...res]);
        setAreThereQuestions(true);
      })
      .catch(() => {
        setAreThereQuestions(false);
      });
  }, []);

  return (
    <div className="App">
      <Myquestions.Provider
        value={{
          question,
          areThereQuestions,
          setCredentials,
          currency,
          setCurrency,
          defaultBalance,
          setDefaultBalance,
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
