import axios from "axios";
import { Formik, Field, Form } from "formik";
import { CharacterInfo } from "../../models/CharacterInfo";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CharacterEditor() {
    const [characterInfo, setCharacterInfo] = useState<CharacterInfo | null>();
    
    let { characterId } = useParams();
    
    const retrieveCharacterInfo = () => {
        axios.get(`http://localhost:5000/pcs/${characterId}`)
            .then(res => {
                setCharacterInfo(res.data);
            }).catch(e => {
                console.log(e);
            });
    }

    const editCharacterInfo = (playerCharacter:CharacterInfo) => {
        /*const requestConfig: AxiosRequestConfig = {
            headers: {
                "name": playerCharacter.pcName,
                "level": playerCharacter.level,
                "hitPoints": playerCharacter.hitPoints,
                "strength": playerCharacter.strength,
                "intelligence": playerCharacter.intelligence,
                "dexterity": playerCharacter.dexterity,
                "wisdom": playerCharacter.wisdom,
                "charisma": playerCharacter.charisma,
                "constitution": playerCharacter.constitution,
                "Content-Type": "application/json"
            }
        }
        
        axios.post("http://localhost:5000/pcs", requestConfig)
            .then((res) => {
                navigate(`/${res.data.id}`);
            }
        ).catch();*/
        console.log(playerCharacter)
    }

    useEffect(() => {
        retrieveCharacterInfo();
    }, [characterInfo]);

    
    return (
        <div>
            <Formik initialValues={{ pcId: characterInfo?.pcId, pcName: characterInfo?.pcName, level: characterInfo?.level, player: characterInfo?.player, hitPoints: characterInfo?.hitPoints, strength: characterInfo?.strength, intelligence: characterInfo?.intelligence, dexterity: characterInfo?.dexterity, wisdom: characterInfo?.wisdom, charisma: characterInfo?.wisdom, constitution: characterInfo?.constitution}}
            onSubmit={(values) => {
                editCharacterInfo(values);
            }}>
            {({ values }) => (
                <Form>
                    
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default CharacterEditor;