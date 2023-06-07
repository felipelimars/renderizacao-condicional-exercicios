import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";
import { useState } from "react";

function TelaCadastro({ mudarTela }) {

  const cadastrarEndereco = () => {
    mudarTela("TelaCadastroEndereco")
  }

  const mostrarTelaLogin = () => {
    mudarTela("TelaLogin")
  }

  let [novoNome, setNovoNome] = useState("")
  let [novoEmail, setNovoEmail] = useState("")
  let [novaSenha, setNovaSenha] = useState("")
  let [confirmacao, setConfirmacao] = useState("")

  const cadastrarUsuario = (event) => {
    if (novoNome.length && novoEmail.length && novaSenha.length && confirmacao.length) {
      console.log({ novoNome, novoEmail, novaSenha, confirmacao });
      cadastrarEndereco()
    } else {
      alert("Preencha os campos abaixo");
    }
  }

  const imprimirCampos = (event) => {
    setNovoNome(event.target.value);
  };

  const imprimirCampos2 = (event) => {
    setNovoEmail(event.target.value);
  };

  const imprimirCampos3 = (event) => {
    setNovaSenha(event.target.value);
  };

  const imprimirCampos4 = (event) => {
    setConfirmacao(event.target.value);
  };

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input onChange={imprimirCampos} value={novoNome} id="titulo" />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          E-mail:
          <Input onChange={imprimirCampos2} value={novoEmail} id="foto" />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Senha:
          <Input onChange={imprimirCampos3} value={novaSenha} id="descricao" />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input onChange={imprimirCampos4} value={confirmacao} id="descricao" />
        </StyledLabel>

        <SendButton onClick={cadastrarUsuario}>Cadastrar</SendButton>

        <BackToLoginButton onClick={mostrarTelaLogin}>Já possuo cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
