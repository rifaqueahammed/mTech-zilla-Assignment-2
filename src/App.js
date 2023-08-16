import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Card from './components/card';
import Input from './components/input';
import { UserContext } from './context/usercontext';
import { useState } from 'react';

function App() {

  const [username,setUsername] = useState('');

  return (
    <div className="">
      <UserContext.Provider value={{username,setUsername}}>
      <Router>
        <Routes>
          <Route path='/' element={<Input/>}></Route>
          <Route path='/home' element={<Card/>}></Route>
        </Routes>
      </Router>

      </UserContext.Provider>
    </div>
  );
}

export default App;
