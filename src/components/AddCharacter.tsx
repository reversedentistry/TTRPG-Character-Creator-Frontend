import { Formik } from "formik";
import axios, { AxiosRequestConfig } from "axios"; 

function addCharacter() {
    const newCharacterRequest = async (playerCharacter: {name: string, level: number, hitPoints: number, strength: number, intelligence: number, dexterity: number, wisdom: number, charisma: number, constitution: number}) => {
        const requestConfig: AxiosRequestConfig = {
            headers: {
                "name": playerCharacter.name,
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
    
    return 
    <div>
        <Formik
            initialValues={{ name: "", level: "", hitPoints: "", strength: "", intelligence: "", dexterity: "", wisdom: "", charisma: "", constitution: ""}}
            onSubmit={(values) => {
                newCharacterRequest
            }}>

        </Formik>
    </div>
}