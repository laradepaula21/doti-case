import styled from "styled-components"

export default function SignUp() {
    return (
    <>
    <SignUpStyled>
        <h1> Crie sua conta</h1>
        <FormStyled>
            <input placeholder="Nome"></input>
            <input placeholder="E-mail"></input>
            <input placeholder="Senha"></input>
            <input placeholder="Confirme sua senha"></input>
            <input placeholder="Endereço"></input>
            <input placeholder="Sobre você"></input>
            <button>Cadastrar</button>
        </FormStyled>
        <h2>Já tem uma conta? Entre!</h2>
        <h2>Ao se registrar, você aceita nossa política de privacidade e nossos termos de serviço</h2>
    </SignUpStyled>
    </>
    )
}

const SignUpStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 552px;
    height: 600px;
    margin: auto;
    background-color: rgba(32, 32, 36, 0.65);
`

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
`