import { createContext } from 'react';

const Myquestions = createContext();
const QuestionsProvider = Myquestions.Provider;
const QuestionsConsumer = Myquestions.Consumer;

export { QuestionsProvider, QuestionsConsumer };
