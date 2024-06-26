import PerfilSettings from "../../components/PerfilSettings/PerfilSettings";
import { useAuth } from "../../contexts/Auth/AuthContext";
import NeedLogin from "../../components/NeedLogin/NeedLogin";

export default function UserSetttings() {
    const { currentUser } = useAuth();

    return (
        <>
            {
                currentUser ? (
                    <PerfilSettings />
                ) : (
                    <NeedLogin />
                )
            }
        </>
    )
}