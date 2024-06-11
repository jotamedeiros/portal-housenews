import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useAuth } from "../../contexts/Auth/AuthContext";
import HomeRedirect from "../../components/HomeRedirect/HomeRedirect";

export default function Registration() {
    const { currentUser } = useAuth();

    return (
        <>
            {
                currentUser ? (
                    <HomeRedirect />
                ) : (
                    <RegistrationForm />
                )
            }
        </>
    )
}