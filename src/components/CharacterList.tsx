import axios, { AxiosRequestConfig } from "axios"; 
import { useState, useEffect } from "react";
import { CharacterInfo } from "../models/CharacterInfo";

function CharacterList() {
    const [characters, setCharacters] = useState<CharacterInfo[]>([]);

    const retrieveCharacters = () => {
        axios.get("http://localhost:5000/pcs")
        .then(res => {
            const characterList: CharacterInfo[] = res.data; 
            setCharacters(characterList); 
        })
    };
    
    useEffect(() => {
        retrieveCharacters();         
    }); 

    const renderCharacters = (characters: CharacterInfo[]) => {
        return characters.map((character: CharacterInfo) => {
            return <p key={character.pcId}>{character.pcName}</p>
        })
    }

    return (
        <div>
            {renderCharacters(characters)}
        </div>
    )
}

export default CharacterList;