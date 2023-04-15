import { Formik } from "formik";
import axios from "axios"; 

function addCharacter() {
    const newCharacterRequest = axios.post("http://localhost:5000/pcs", {}); 
    
    return 
    <div>
        <Formik
            initialValues={{ name: "", level: "", hitPoints: "", strength: "", intelligence: "", dexterity: "", wisdom: "", charisma: "", constitution: ""}}
            onSubmit={(values) => {}}>

        </Formik>
    </div>
}