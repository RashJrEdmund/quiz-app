/* eslint-disable react/jsx-no-constructed-context-values */
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

import Home from './home/Home';
import Question from './pages/Questions/Question';
import Results from './pages/Results/Results';
import { Myquestions } from './context/Context';

function App() {
  const [question, setQuestion] = useState(null);

  const [answerTracker, setAnswerTracker] = useState({ passed: 0, failed: 0 });

  return (
    <div className="App">
      <Myquestions.Provider
        value={{
          question,
          setQuestion,

          answerTracker,
          setAnswerTracker,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/question/:id" element={<Question />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </Myquestions.Provider>
    </div>
  );
}

export default App;
