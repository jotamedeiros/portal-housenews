import LoginForm from "../../components/LoginForm/LoginForm";
import { useAuth } from "../../contexts/Auth/AuthContext";
import HomeRedirect from "../../components/HomeRedirect/HomeRedirect";

export default function Login() {
    const { currentUser } = useAuth();

    return (
        <>
            {
                currentUser ? (
                    <HomeRedirect />
                ) : (
                    <LoginForm />
                )
            }
        </>
    )
}