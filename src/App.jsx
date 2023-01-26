import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './home/Home';
import Question from './pages/Question';
import Results from './results/Results';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route
            path="/question1"
            element={<Question pageHeader="Question 1" nextPath="/question2" />}
          />
          <Route
            path="/question2"
            element={<Question pageHeader="Question 2" nextPath="/question3" />}
          />
          <Route
            path="/question3"
            element={<Question pageHeader="Question 3" nextPath="/question4" />}
          />
          <Route
            path="/question4"
            element={<Question pageHeader="Question 4" nextPath="/question5" />}
          />
          <Route
            path="/question5"
            element={<Question pageHeader="Question 5" nextPath="/question6" />}
          />
          <Route
            path="/question6"
            element={<Question pageHeader="Question 6" nextPath="/question7" />}
          />
          <Route
            path="/question7"
            element={<Question pageHeader="Question 7" nextPath="/question8" />}
          />
          <Route
            path="/question8"
            element={<Question pageHeader="Question 8" nextPath="/question9" />}
          />
          <Route
            path="/question9"
            element={
              <Question pageHeader="Question 9" nextPath="/question10" />
            }
          />
          <Route
            path="/question10"
            element={<Question pageHeader="Question 10" nextPath="/results" />}
          />

          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
