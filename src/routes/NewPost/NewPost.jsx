import NewPostForm from "../../components/NewPostForm/NewPostForm";
import { useAuth } from "../../contexts/Auth/AuthContext";
import NeedLogin from "../../components/NeedLogin/NeedLogin";

export default function NewPost() {
    const { currentUser } = useAuth();

    return (
        <>
            {
                currentUser ? (
                    <NewPostForm />
                ) : (
                    <NeedLogin />
                )
            }
        </>
    )
}