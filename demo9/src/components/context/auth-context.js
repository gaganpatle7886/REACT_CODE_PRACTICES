import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({ 
    isLoggedIn: false, 
    onLogout:()=>{}, 
    onLogin:(eamil,password)=>{},  
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false );

    useEffect(() => {
        const temp = localStorage.getItem("isLoggedIn");
        console.log(temp);
        if (temp === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
    };
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}    
        </AuthContext.Provider>
    );
};


export default AuthContext;