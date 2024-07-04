import NewPostForm from "../../components/NewPostForm/NewPostForm";
import { useAuth } from "../../contexts/Auth/AuthContext";
import NeedLogin from "../../components/NeedLogin/NeedLogin";
import NeedEmailVerification from "../../components/NeedEmailVerification/NeedEmailVerification";

export default function NewPost() {
    const { currentUser } = useAuth();

    return (
        <>
            {
                currentUser && currentUser.emailVerified ? (
                    <NewPostForm />
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