import React from 'react'
import { RegisterContainer } from './RegisterFormStyles'
import { NameForm } from './RegisterFormStyles'
import {
    withFormik,
    Form,
    Field
} from "formik";
//import Yup from "yup";


const RegisterForm = ({
    values
}) => ( <
    Form >
    <
    label >
    Your name:
    <
    Field type = "name"
    name = "name"
    placeholder = "name" / >
    <
    /label> <
    label >
    Your username:
    <
    Field type = "username"
    name = "username"
    placeholder = "username" / >
    <
    /label> <
    label >
    Your email:
    <
    Field type = "email"
    name = "email"
    placeholder = "email" / >
    <
    /label> <
    label >
    Password:
    <
    Field type = "password"
    name = "password"
    placeholder = "password" / >
    <
    /label>

    <
    button type = "submit" > Login < /button> < /
    Form >
);

export default withFormik({
    mapPropsToValues() {
        return {
            name: "",
            username: "",
            email: "",
            password: ""
        };
    },
    handleSubmit(values) {
        console.log(values);
    }
})(RegisterForm);

//</button>const rootElement = document.getElementById("root");
//</label>ReactDOM.render( < FormikApp / > , rootElement);

//</label></label>const RegisterForm = () => {

// return ( <
//      RegisterContainer >
//   <
//    NameForm >
//     <
//     /NameForm> < /
//     RegisterContainer >
// );
//};

//export default RegisterForm;