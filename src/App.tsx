import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AddCharacter from './components/AddCharacter/AddCharacter';
import './App.css';
import CharacterPage from './components/CharacterPage/CharacterPage';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterEditor from './components/CharacterPage/CharacterEditor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<CharacterList/>}/>
        <Route path="/" element={<AddCharacter/>}/>
        <Route path="/:characterId" element={<CharacterPage/>}/>
        <Route path="/edit/:characterId" element={<CharacterEditor/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
