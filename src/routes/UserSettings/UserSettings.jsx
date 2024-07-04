import PerfilSettings from "../../components/PerfilSettings/PerfilSettings";
import { useAuth } from "../../contexts/Auth/AuthContext";
import NeedEmailVerification from "../../components/NeedEmailVerification/NeedEmailVerification";
import NeedLogin from "../../components/NeedLogin/NeedLogin";

export default function UserSetttings() {
    const { currentUser } = useAuth();

    return (
        <>
            {
                currentUser && currentUser.emailVerified ? (
                    <PerfilSettings />
                ) : (
                    null
                )
            }
            {
                currentUser && !currentUser.emailVerified ? (
                    <NeedEmailVerification />
                ) : (
                    null
                )
            }
            {
                currentUser ? (
                    null
                ) : (
                    <NeedLogin />
                )
            }
        </>
    )
}