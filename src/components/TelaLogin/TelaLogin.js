import { useState } from "react";
import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin(props) {

  const login = () => {
    props.mudarTela("TelaPrincipal")
  }

  const mostrarTelaCadastro = () => {
    props.mudarTela("TelaCadastro")
  }

  let [email, setEmail] = useState("")
  let [senha, setSenha] = useState("")

  const enviarDados = (event) => {
    if (email.length && senha.length) {
      console.log({email, senha});
      setEmail("")
      setSenha("") 
      login()

    } else {
      alert("Preencha os campos abaixo!");
    }
  }

  const imprimirDados = (event) => {
    setEmail(event.target.value);
  };

  const imprimirDados2 = (event) => {
    setSenha(event.target.value);
  };

  return (
    <FormContainer >
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel>E-mail:
          <Input onChange={imprimirDados}  value={email}/>
        </StyledLabel>

        <StyledLabel>Senha:
          <Input onChange={imprimirDados2} value={senha}/>
        </StyledLabel>

        <SendButton onClick={enviarDados}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
