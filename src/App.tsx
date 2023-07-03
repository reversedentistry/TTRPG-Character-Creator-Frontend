import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AddCharacter from './components/AddCharacter/AddCharacter';
import './App.css';
import CharacterPage from './components/CharacterPage/CharacterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddCharacter/>}/>
        <Route path="/:characterId" element={<CharacterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
