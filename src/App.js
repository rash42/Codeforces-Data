import './App.css';
import Row from './components/Row';
import { Routes, Route } from 'react-router-dom';
import UpcommingContest from './components/UpcommingContest';
import UserInfo from './components/UserInfo';
import ProblemSet from './components/ProblemSet';
import Blogs from './components/Blogs';
import React from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './app/store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main></Main>
      </Provider>

    </div >
  );
}

export default App;
