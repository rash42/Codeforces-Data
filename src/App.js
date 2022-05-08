import './App.css';
import Row from './components/Row';
import { Routes, Route } from 'react-router-dom';
import UpcommingContest from './components/UpcommingContest';
import UserInfo from './components/UserInfo';
import ProblemSet from './components/ProblemSet';
import Blogs from './components/Blogs';
import React from 'react';


function App() {
  return (
    <div className="App">
      <h1 className='heading'>Welcome to Codeforces data!</h1>
      <p className='paragraph'>This site will help to display various data for the codeforces platform. You can search for a contest, user etc here.</p>
      <Routes>
        <Route path='/' element={<Row />}></Route>
        <Route path='/contests' element={<UpcommingContest />}></Route>
        <Route path='/user' element={
          <React.Suspense fallback="Loading....">
            <UserInfo />
          </React.Suspense>
        }>
        </Route>
        <Route path='/problems' element={<ProblemSet />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
      </Routes>

    </div >
  );
}

export default App;
