import { useContext } from "react";
import styles from "./CSS/MainHeader.module.css"
import Navigation from "./UI/Navigation.module";
import { UserContext } from "../App";
import AuthContext from "./context/auth-context";

function MainHeader(props) {

    const authContext = useContext(AuthContext)
    return (
      <AuthContext.Consumer>{(ctx)=>{
        return(
          <header className={styles["main-header"]}>
          <h1>I am Header</h1>
          {ctx.isLoggedIn && < Navigation /> }
        </header>  
        )
      }}</AuthContext.Consumer>
        
 ); 

    {/*   <AuthContext.Consumer>
        {(ctx) =>{
          return (
            <header className={styles["main-header"]}>
            <h1>I am Header</h1>
            {ctx.isLoggedIn && < Navigation onLogout={props.onLogout}/> }
          </header>  
        
          );
        }}
       </AuthContext.Consumer>
    */ }
    
}

export default MainHeader;