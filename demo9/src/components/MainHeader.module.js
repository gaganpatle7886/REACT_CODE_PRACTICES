import styles from "./MainHeader.module.css"
import Navigation from "./Navigation.module";

function MainHeader(props) {
    return (
    <header className={styles["main-header"]}>
        <h1>I am Header</h1>
        {props.isLoggedIn && < Navigation onLogout={props.onLogout}/> }
    </header>
    );
}

export default MainHeader;