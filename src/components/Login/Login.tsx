import { Formik, Form, Field } from "formik"; 
import axios from "axios"; 

function Login() {
    interface LoginInfo {
        username:string, 
        password:string
    }

    const loginInitialValues:LoginInfo = {
        username: "",
        password: ""
    }

    const loginRequest = async (loginUser:LoginInfo) => {}; 

    return (
        <div>
            <Formik initialValues={loginInitialValues} onSubmit={loginRequest}>
                {({ values }) => (
                    <Form>
                        <label>Username</label>
                        <Field id="username" name="username" value={values.username} placeholder="Username"></Field>

                        <label>Password</label>
                        <Field id="password" name="password" value={values.password} type="password" placeholder="Password"></Field>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login;