import axios from "axios";
import { CharacterInfo } from "../../models/CharacterInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CharacterPage() {
    const [characterInfo, setCharacterInfo] = useState({});
    
    let { characterId } = useParams();

    const retrieveCharacterInfo = () => {
        axios.get(`http://localhost:5000/pcs/${characterId}`)
        .then(res => {
            setCharacterInfo(res.data);
        })
    }

    useEffect(() => {
        retrieveCharacterInfo(); 
    }, [characterInfo]);

    return (
        <div>
            
        </div>
    )
}

export default CharacterPage