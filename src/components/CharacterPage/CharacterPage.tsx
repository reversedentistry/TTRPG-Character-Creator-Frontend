import axios from "axios";
import { CharacterInfo } from "../../models/CharacterInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CharacterPage() {
    const [characterInfo, setCharacterInfo] = useState<CharacterInfo>();
    
    let { characterId } = useParams();

    const retrieveCharacterInfo = () => {
        axios.get(`http://localhost:5000/pcs/${characterId}`)
        .then(res => {
            setCharacterInfo(res.data);
        }).catch(e => {
            console.log(e); 
        }); 
    }

    useEffect(() => {
        retrieveCharacterInfo(); 
    }, [characterInfo]);

    return (
        <div>
            <p>{characterInfo?.pcName}</p>
            <p>Level: {characterInfo?.level}</p>
            <p>Maximum hitpoints: {characterInfo?.hitPoints}</p>
            <p>Strength: {characterInfo?.strength}</p>
            <p>Intelligence: {characterInfo?.intelligence}</p>
            <p>Dexterity: {characterInfo?.dexterity}</p>
            <p>Wisdom: {characterInfo?.wisdom}</p>
            <p>Charisma: {characterInfo?.charisma}</p>
            <p>Constitution: {characterInfo?.constitution}</p>
        </div>
    )
}

export default CharacterPage;