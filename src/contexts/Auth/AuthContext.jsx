import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // O Firebase chama essa função sempre que o estado de autenticação do usuário muda
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
            console.log(user)
        });

        // limpeza na desmontagem
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};