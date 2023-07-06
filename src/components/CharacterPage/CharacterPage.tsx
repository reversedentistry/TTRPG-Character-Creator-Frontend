import axios from "axios";
import { CharacterInfo } from "../../models/CharacterInfo";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CharacterEditor from "./CharacterEditor";

function CharacterPage() {
    const [characterInfo, setCharacterInfo] = useState<CharacterInfo>();
    const [characterEditor, setCharacterEditor] = useState<boolean>(false);

    let { characterId } = useParams();

    const navigate = useNavigate();

    const retrieveCharacterInfo = () => {
        axios.get(`http://localhost:5000/pcs/${characterId}`)
            .then(res => {
                setCharacterInfo(res.data);
            }).catch(e => {
                console.log(e);
            });
    }

    const openCharacterEditor = () => {
        setCharacterEditor(!characterEditor);
    }
    
    const deleteCharacter = () => {
        axios.delete(`http://localhost:5000/pcs/${characterId}`)
        .then(res => {
            navigate("/characters");
        }).catch(e => {
            console.log(e);
        });
    }

    useEffect(() => {
        retrieveCharacterInfo();
    }, [characterInfo]);

    if (characterEditor) {
        <CharacterEditor pcId={characterInfo?.pcId} pcName={characterInfo?.pcName} player={characterInfo?.player} level={characterInfo?.level} hitPoints={characterInfo?.hitPoints} strength={characterInfo?.strength} intelligence={characterInfo?.intelligence} dexterity={characterInfo?.dexterity} wisdom={characterInfo?.wisdom} charisma={characterInfo?.charisma} constitution={characterInfo?.constitution}/>
    } else {
        return (
            <section>
                <button onClick={openCharacterEditor}>Edit character</button>
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
                <button onClick={deleteCharacter}>Delete character</button>
            </section>
        )
    }  
    
}

export default CharacterPage;