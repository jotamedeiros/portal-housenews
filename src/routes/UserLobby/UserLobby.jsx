import Lobby from "../../components/Lobby/Lobby";
import { useAuth } from "../../contexts/Auth/AuthContext";
import NeedLogin from "../../components/NeedLogin/NeedLogin";

export default function UserLobby() {
    const { currentUser } = useAuth();

    return (
        <>
            {
                currentUser ? (
                    <Lobby />
                ) : (
                    <NeedLogin />
                )
            }
        </>
    )
}