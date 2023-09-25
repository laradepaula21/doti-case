import {StyledLoggedUsers, StyledUserProfile,} from "./styles"
import LoggedUser from "./LoggedUser";


export default function LoggedUsers( { sessions, getSessions }) {

    

    return (
        <>
        <StyledLoggedUsers>
            {sessions.map((user, index) =>
                <StyledUserProfile key={index}>
                    <LoggedUser name={user.id_usuario.nome} 
                    description={user.id_usuario.descricao}
                    time={user.createdAt}
                    id={user.id_usuario._id}
                    getSessions={getSessions}
                    ></LoggedUser>
                </StyledUserProfile>
            )}
        </StyledLoggedUsers>
        </>
    );
}


