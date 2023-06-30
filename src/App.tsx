import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AddCharacter from './components/AddCharacter';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddCharacter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
