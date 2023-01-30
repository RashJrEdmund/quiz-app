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
            path="/question/:id"
            element={
              <Question
                pageIndex={0}
                nextPath="/question/:id"
                QUESTION={question}
              />
            }
          />

          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
