import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Getdata from './data/Getdata';

import Home from './home/Home';
import Question from './pages/Question';
import Results from './results/Results';

function App() {
  const [question, setQuestion] = useState([]);
  console.log('this questions log 1', question);

  useEffect(() => {
    Getdata()
      .then((res) => setQuestion([...res]))
      .catch(() => {
        document.querySelector('.question-whole').style =
          'display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem; font-weight: 700;';
        document.querySelector('.question-whole').innerHTML = 'Getting data...';
        setTimeout(() => {
          document.querySelector('.question-whole').innerHTML =
            'An Error Occured While Fetching Api: </br></br> Check network connection or try refreshing page';
        }, 2000);
      });
  }, []);
  // console.log('this is questions of 1', typeof question[1]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route
            path="/question1"
            element={
              <Question
                pageIndex={0}
                nextPath="/question2"
                QUESTION={question}
              />
            }
          />
          <Route
            path="/question2"
            element={
              <Question
                pageIndex={1}
                nextPath="/question3"
                QUESTION={question}
              />
            }
          />
          <Route
            path="/question3"
            element={
              <Question
                pageIndex={2}
                nextPath="/question4"
                QUESTION={question}
              />
            }
          />
          <Route
            path="/question4"
            element={
              <Question
                pageIndex={3}
                nextPath="/question5"
                QUESTION={question}
              />
            }
          />
          <Route
            path="/question5"
            element={
              <Question
                pageIndex={4}
                nextPath="/question6"
                QUESTION={question}
              />
            }
          />
          <Route
            path="/question6"
            element={
              <Question
                pageIndex={5}
                nextPath="/question7"
                QUESTION={question}
              />
            }
          />
          <Route
            path="/question7"
            element={
              <Question
                pageIndex={6}
                nextPath="/question8"
                QUESTION={question}
              />
            }
          />
          <Route
            path="/question8"
            element={
              <Question
                pageIndex={7}
                nextPath="/question9"
                QUESTION={question}
              />
            }
          />
          <Route
            path="/question9"
            element={
              <Question
                pageIndex={8}
                nextPath="/question10"
                QUESTION={question}
              />
            }
          />
          <Route
            path="/question10"
            element={
              <Question pageIndex={9} nextPath="/results" QUESTION={question} />
            }
          />

          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
