import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home ,Error,Adduser, Employ} from './Pages';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddUser" element={<Adduser />} />
        <Route path="/employeDetails/:Id" element={<Employ />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
