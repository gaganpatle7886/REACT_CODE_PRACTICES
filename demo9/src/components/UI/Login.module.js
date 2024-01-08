import classes from "../CSS/Login.module.css";
import Card from "./Card.module";
import { useEffect, useReducer, useState, useContext } from "react";
import Button from "./Button.module";
import AuthContext from "../context/auth-context";

//const [state, dispatchFn] = useReducer (reducerFn, initialState, initFn);

const emailReducer = (state, action) => {

    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    }

    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
    }
    return { value: "", isValid: null }
};


const passwordReducer = (state, action) => {

    if (action.type === 'USER_INPUT') {

        return { value: action.val, isValid: action.val.length > 7 };
    }

    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.length > 7 };
    }
    return { value: "", isValid: null }
};



function Login(props) {

    const authContext = useContext(AuthContext);

    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailValid] = useState();

    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState();

    const [FormIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });

    useEffect(() => {
        console.log("useEffect");

        const timer = setTimeout(() => {
            console.log("inside Timeout");
            setFormIsValid(
                emailState.isValid && passwordState.isValid
            );
        }, 500);

        return () => {
            console.log("CLEAN UP");
            clearTimeout(timer);
        };
    }, [emailState, passwordState]);

    const emailChangeHandler = (event) => {

        console.log("Test");
        // setEnteredEmail(event.target.value);
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });
        // console.log("emailChangeHandler",event.target.value);


    //    setFormIsValid(
      //      event.target.value.includes('@') && passwordState.value.trim().length > 7
       // );
    };

    const passwordChangeHandler = (event) => {
        // setEnteredPassword(event.target.value);
        dispatchPassword({ type: "USER_INPUT", val: event.target.value });
        // console.log("passwordChangeHandler",event.target.value);

        // setFormIsValid(
        //   emailState.value.includes('@') && event.target.value.trim().length > 7
        //);
    };

    const validateEmailHandler = () => {
        //  setEmailValid( emailState.value.includes('@'));
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        //  setPasswordIsValid(passwordState.value.trim().length > 7 ? true : false);
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        authContext.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""}`}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        onChange={emailChangeHandler}
                        value={emailState.value}
                        onBlur={validateEmailHandler}
                    ></input>
                </div>
                <div className={`${classes.control}  ${passwordState.isValid === false ? classes.invalid : ""}`}>
                    <label htmlFor="password" >Password</label>
                    <input
                        id="password"
                        type="password"
                        onChange={passwordChangeHandler}
                        value={passwordState.value}
                        onBlur={validatePasswordHandler}
                    ></input>
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!FormIsValid}>Login</Button>
                </div>
            </form>
        </Card>
    );
}

export default Login;