import { Formik, Form, Field } from "formik";
import axios from "axios";
import { PlayerInfo } from "../../models/PlayerInfo";

function Registration() {
    const newPlayerInitialValues:PlayerInfo = {
        username: "",
        password: ""
    }    
    
    const createNewUser = async () => {};
    
    return (
        <div><Formik initialValues={newPlayerInitialValues} onSubmit={createNewUser}></Formik></div>
        
    )
}

export default Registration;