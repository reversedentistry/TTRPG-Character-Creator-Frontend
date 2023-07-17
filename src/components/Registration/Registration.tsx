import { Formik, Form, Field } from "formik";
import axios from "axios";


function Registration() {
    interface RegistrationInfo {
        username:string,
        playerName:string,
        password:string
    }
    
    const newPlayerInitialValues:RegistrationInfo = {
        username: "",
        playerName: "",
        password: ""
    }    
    
    const createNewUser = async (newPlayer:RegistrationInfo) => {};
    
    return (
        <div>
            <Formik initialValues={newPlayerInitialValues} onSubmit={createNewUser}>
                {({ values }) => (
                    <Form>
                        <label>Enter a username to use for login</label>
                        <Field id="username" name="username" value={values.username} placeholder="Username"></Field>

                        <label>Enter a name</label>
                        <Field id="playerName" name="playerName" value={values.playerName} placeholder="Name"></Field>

                        <label>Password</label>
                        <Field id="password" name="password" value={values.password} type="password" placeholder="Password"></Field>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
        
    )
}

export default Registration;