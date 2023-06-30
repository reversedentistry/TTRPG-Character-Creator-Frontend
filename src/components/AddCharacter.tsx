import { Formik, Field, Form } from "formik";
import axios, { AxiosRequestConfig } from "axios"; 
import { useNavigate } from "react-router-dom";

function AddCharacter() {
    const navigate = useNavigate();

    const newCharacterRequest = async (playerCharacter: {charName: string, level: number, hitPoints: number, strength: number, intelligence: number, dexterity: number, wisdom: number, charisma: number, constitution: number}) => {
        /*const requestConfig: AxiosRequestConfig = {
            headers: {
                "name": playerCharacter.charName,
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
    
    return (
    <div>
        <Formik
            initialValues={{ charName: "", level: 0, hitPoints: 0, strength: 0, intelligence: 0, dexterity: 0, wisdom: 0, charisma: 0, constitution: 0}}
            onSubmit={(values) => {
                newCharacterRequest(values);
            }}>
            {({ values }) => (
                <Form>
                    <label>Character name</label>
                    <Field id="charName" name="charName" value={values.charName}/>
                    
                    <label>Level</label>
                    <Field id="level" name="level" type="number" value={values.level}/>
                    
                    <label>Hit points</label>
                    <Field id="hitPoints" name="hitPoints" type="number" value={values.hitPoints}></Field>
                    
                    <label>Strength</label>
                    <Field id="strength" name="strength" type="number" value={values.strength}></Field>
                    
                    <label>Intelligence</label>
                    <Field id="intelligence" name="intelligence" type="number" value={values.intelligence}></Field>
                    
                    <label>Dexterity</label>
                    <Field id="dexterity" name="dexterity" type="number" value={values.dexterity}></Field>
                    
                    <label>Wisdom</label>
                    <Field id="wisdom" name="wisdom" type="number" value={values.wisdom}></Field>
                    
                    <label>Charisma</label>
                    <Field id="charisma" name="charisma" type="number" value={values.charisma}></Field>
                    
                    <label>Constitution</label>
                    <Field id="constitution" name="constitution" type="number" value={values.constitution}></Field>
                    
                    <button type="submit">Submit</button>
                </Form>
            )}

        </Formik>
    </div>
    )
}

export default AddCharacter;