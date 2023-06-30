import axios, { AxiosRequestConfig } from "axios"; 
import { useState, useEffect } from "react";
import { CharacterInfo } from "../models/CharacterInfo";

function CharacterList() {
    const [characters, setCharacters] = useState<CharacterInfo[] | null>(null);

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
}

export default CharacterList;