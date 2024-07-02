import PerfilSettings from "../../components/PerfilSettings/PerfilSettings";
import { useAuth } from "../../contexts/Auth/AuthContext";
import NeedEmailVerification from "../../components/NeedEmailVerification/NeedEmailVerification";

export default function UserSetttings() {
    const { currentUser } = useAuth();

    return (
        <>
            {
                currentUser && currentUser.emailVerified ? (
                    <PerfilSettings />
                ) : (
                    <NeedEmailVerification />
                )
            }
        </>
    )
}