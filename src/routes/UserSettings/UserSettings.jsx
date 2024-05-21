import PerfilSettings from "../../components/PerfilSettings/PerfilSettings";

export default function UserSetttings() {
    return (
        <>
            <PerfilSettings 
                name={`Pedro da Silva Soares`}
                nickname={`Pedro Soares`}
                email={`pedrosilva.soares@gmail.com`}
                password={`********`}
                phone={`+XX (XX) XXXXX-XXXX`}
                xUrl={`https://www.x.com/`}
                facebookUrl={`https://www.facebook.com/`}
                instagramUrl={`https://www.instagram.com/`}
                telegramUrl={`https://www.web.telegram.org/`}
            />
        </>
    )
}