import { Formik, Field, Form } from "formik";
import axios, { AxiosRequestConfig } from "axios"; 

function AddCharacter() {
    const newCharacterRequest = async (playerCharacter: {charName: string, level: number, hitPoints: number, strength: number, intelligence: number, dexterity: number, wisdom: number, charisma: number, constitution: number}) => {
        const requestConfig: AxiosRequestConfig = {
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

            }
        ).catch(); 
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
                    <Field id="lvl" name="lvl" value={values.level}/>
                    <label>Hit points</label>
                    <Field id="hp" name="hp" value={values.hitPoints}></Field>
                    <label>Strength</label>
                    <Field id="str" name="str" value={values.strength}></Field>
                    <label>Intelligence</label>
                    <Field id="int" name="int" value={values.intelligence}></Field>
                    <label>Dexterity</label>
                    <Field id="dex" name="dex" value={values.dexterity}></Field>
                    <label>Wisdom</label>
                    <Field id="wis" name="wis" value={values.wisdom}></Field>
                    <label>Charisma</label>
                    <Field id="cha" name="cha" value={values.charisma}></Field>
                    <label>Constitution</label>
                    <Field id="con" name="con" value={values.constitution}></Field>
                </Form>
            )}

        </Formik>
    </div>
    )
}

export default AddCharacter;