/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import './results.css';
import { Link } from 'react-router-dom';
import { QuestionsConsumer } from '../context/Context';

function Results() {
  return (
    <QuestionsConsumer>
      {({ answerTracker, setAnswerTracker, question }) => {
        const displayResults = () => {
          if (answerTracker.passed < 5) {
            if (answerTracker.passed < 2) {
              return 'Nothing personal 😹';
            }
            return 'Better luck next time 😟';
          }
          if (answerTracker.passed > 7) {
            return 'You are an Excellent someone 👏😌';
          }
          return 'good good 😉';
        };
        return (
          <div className="results-whole">
            <div className="results-page">
              <header>finalResults</header>
              <div className="score">
                <div className="rights">
                  <p>Correct</p>
                  <span>{answerTracker.passed}</span>
                </div>
                <div className="wrongs">
                  <p>Wrong</p>
                  <span>{answerTracker.failed}</span>
                </div>
              </div>

              <p className="my-review">{displayResults()}</p>

              <p className="correction-header">
                Below are the questions and right answers:
              </p>

              <ol className="questions-ans">
                {question.map((ques, index) => {
                  return (
                    <li key={index}>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: ques.question,
                        }}
                      />
                      <span className="correct-ans">{ques.correct_answer}</span>
                    </li>
                  );
                })}
              </ol>

              <p className="would-you-like">
                would You like to restart the quize?
              </p>

              <div className="option">
                <Link to="/question/0">
                  <button
                    type="button"
                    className="retake"
                    onClick={() => {
                      setAnswerTracker({ passed: 0, failed: 0 });
                    }}
                  >
                    Restart
                  </button>
                </Link>
                <Link to="/">
                  <button
                    type="button"
                    className="retake"
                    onClick={() => {
                      setAnswerTracker({ passed: 0, failed: 0 });
                    }}
                  >
                    endQuize
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      }}
    </QuestionsConsumer>
  );
}

export default Results;
