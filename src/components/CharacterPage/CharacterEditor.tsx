import axios, { AxiosRequestConfig } from "axios";
import { Formik, Field, Form } from "formik";
import { CharacterInfo } from "../../models/CharacterInfo";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function CharacterEditor() {
    const [characterInfo, setCharacterInfo] = useState<CharacterInfo | null>();
    
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

    const editCharacterInfo = (playerCharacter:CharacterInfo) => {
        /*const requestConfig: AxiosRequestConfig = {
            headers: {
                "pcId": playerCharacter.pcId,
                "pcName": playerCharacter.pcName,
                "player": playerCharacter.player,
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
        
        axios.put("http://localhost:5000/pcs", requestConfig)
            .then((res) => {
                navigate(`/${res.data.id}`);
            }
        ).catch();*/
        console.log(playerCharacter);
        navigate(`/${characterId}`);
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
                    <label htmlFor="charName">Character name</label>
                    <Field id="charName" name="charName" value={values.pcName}/>
                    
                    <label htmlFor="level">Level</label>
                    <Field id="level" name="level" type="number" value={values.level}/>
                    
                    <label htmlFor="hitPoints">Hit points</label>
                    <Field id="hitPoints" name="hitPoints" type="number" value={values.hitPoints}></Field>
                    
                    <label htmlFor="strength">Strength</label>
                    <Field id="strength" name="strength" type="number" value={values.strength}></Field>
                    
                    <label htmlFor="intelligence">Intelligence</label>
                    <Field id="intelligence" name="intelligence" type="number" value={values.intelligence}></Field>
                    
                    <label htmlFor="dexterity">Dexterity</label>
                    <Field id="dexterity" name="dexterity" type="number" value={values.dexterity}></Field>
                    
                    <label htmlFor="wisdom">Wisdom</label>
                    <Field id="wisdom" name="wisdom" type="number" value={values.wisdom}></Field>
                    
                    <label htmlFor="charisma">Charisma</label>
                    <Field id="charisma" name="charisma" type="number" value={values.charisma}></Field>
                    
                    <label htmlFor="constitution">Constitution</label>
                    <Field id="constitution" name="constitution" type="number" value={values.constitution}></Field>
                    
                    <button type="submit">Submit</button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default CharacterEditor;