import HomeRedirect from "../../components/HomeRedirect/HomeRedirect";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";
import { useAuth } from "../../contexts/Auth/AuthContext";

export default function ResetPassword() {
    const { currentUser } = useAuth();

    return (
        <>
            {
                currentUser ? (
                    <HomeRedirect />
                ) : (
                    <ResetPasswordForm />
                )
            }
        </>
    )
}