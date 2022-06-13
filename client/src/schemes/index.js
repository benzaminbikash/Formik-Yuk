import * as Yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const BasicSechma = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email").required("Required"),
    age: Yup.number().positive().integer().required("Required"),
    password: Yup.string()
        .min(5)
        // .matches(
        //     passwordRules,
        //     { message: "Please create a Strong password" }).required("Required")
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
    ,
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required("Required"),
});
export default BasicSechma;
export const Advance = Yup.object().shape({
    username: Yup.string().min(3, 'UserName must be at least 3 characters long').required("Required"),
    jobType: Yup.string().oneOf(["designer", "developer", "manager", "other"], "I have no word").required("Required"),

    acceptedTos: Yup.boolean()
        .oneOf([true], "Please accept the terms of services")
});

