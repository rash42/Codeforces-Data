import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import { Routes, Route } from 'react-router-dom';
import UpcommingContest from './components/UpcommingContest';


function App() {
  return (
    <div className="App">
      <h1 className='heading'>Welcome to Codeforces data!</h1>
      <p className='paragraph'>This site will help to display various data for the codeforces platform. You can search for a contest, user etc here.</p>
      <Routes>
        <Route path='/' element={<Row />}></Route>
        <Route path='/upcomming-contest' element={<UpcommingContest/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
