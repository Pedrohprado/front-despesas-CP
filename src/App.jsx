import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import AddRecord from './pages/addrecord';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/record' element={<AddRecord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
