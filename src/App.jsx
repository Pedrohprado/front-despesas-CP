import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import AddRecord from './pages/addrecord';
import Relatorie from './pages/relatorie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/record' element={<AddRecord />} />
        <Route path='/balance' element={<Relatorie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
