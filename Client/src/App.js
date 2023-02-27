import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUser from './Pages/HomePages/AddUser';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddUser" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
