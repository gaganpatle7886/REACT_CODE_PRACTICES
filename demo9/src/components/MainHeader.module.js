import { useContext } from "react";
import styles from "./CSS/MainHeader.module.css"
import Navigation from "./UI/Navigation.module";
import { UserContext } from "../App";

function MainHeader() {

    const isLoggedIn = useContext(UserContext);
    const onLogout = useContext(UserContext);
    return (
        <header className={styles["main-header"]}>
        <h1>I am Header</h1>
        {isLoggedIn && < Navigation  value={onLogout}/> }
        </header> 
        );
        {/* <header className={styles["main-header"]}>
        <h1>I am Header</h1>
        {props.isLoggedIn && < Navigation onLogout={props.onLogout}/> }
    </header>  */}
    
}

export default MainHeader;