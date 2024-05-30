import { Formik, Field, Form } from "formik";
// import axios, { AxiosRequestConfig } from "axios"; 
import { useNavigate } from "react-router-dom";
import './AddCharacter.css';

function AddCharacter() {
    interface NewPC {
        pcName:string,
        level:number, 
        hitPoints:number,
        strength:number,
        intelligence:number,
        dexterity:number,
        wisdom:number, 
        charisma:number,
        constitution:number
    }
    
    const navigate = useNavigate();

    const newCharacterRequest = async (playerCharacter:NewPC) => {
        /*const requestConfig: AxiosRequestConfig = {
            headers: {
                "pcName": playerCharacter.charName,
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
        console.log(playerCharacter);
    }

    const newPCInitialValues:NewPC = {
        pcName: "",
        level: 0, 
        hitPoints: 0,
        strength: 0,
        intelligence: 0,
        dexterity: 0,
        wisdom: 0, 
        charisma: 0,
        constitution: 0
    }
    
    return (
    <div id="add-character-page">
        <Formik
            initialValues={newPCInitialValues}
            onSubmit={(values) => {
                newCharacterRequest(values);
            }}>
            {({ values }) => (
                <Form>
                    <label htmlFor="pcName">Character name</label>
                    <Field id="pcName" name="pcName" value={values.pcName}/>
                    
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

export default AddCharacter;