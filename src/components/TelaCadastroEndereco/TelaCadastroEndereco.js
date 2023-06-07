import React from 'react';
import { Form, FormContainer, Input, StyledLabel, Button } from "./styled";
import { useState } from 'react';

const TelaCadastroEndereco = ({ mudarTela }) => {

  const tela = () => {
    mudarTela("TelaPrincipal");
  };

  let [endereco, setEndereco] = useState("")
  let [numeroResidencial, setNumeroResidencial] = useState("")
  let [complemento, setComplemento] = useState("")
  let [telefone, setTelefone] = useState("")

  const cadastrarEndereco = (event) => {
    if (endereco.length && numeroResidencial.length && complemento.length && telefone.length) {

      console.log({ endereco, numeroResidencial, complemento, telefone });
      tela()

    } else {
      alert("Preencha os campos abaixo");
    }
  }

  const imprimirEndereco = (event) => {
    setEndereco(event.target.value);
  };

  const imprimirEndereco2 = (event) => {
    setNumeroResidencial(event.target.value);
  };

  const imprimirEndereco3 = (event) => {
    setComplemento(event.target.value);
  };

  const imprimirEndereco4 = (event) => {
    setTelefone(event.target.value);
  };

  return (

    <FormContainer>
      <h1>Cadastro Endereço</h1>
      <Form>
        <StyledLabel htmlFor="Endereço">
          Endereço:
          <Input onChange={imprimirEndereco} value={endereco} id="Endereço" />
        </StyledLabel>

        <StyledLabel htmlFor='Número residencial'>
          Número residencial:
          <Input onChange={imprimirEndereco2} value={numeroResidencial} id="Número residencial" />
        </StyledLabel>

        <StyledLabel htmlFor='Complemento'>
          Complemento:
          <Input onChange={imprimirEndereco3} value={complemento} id="Complemento" />
        </StyledLabel>

        <StyledLabel htmlFor='Telefone'>
          Telefone
          <Input onChange={imprimirEndereco4} value={telefone} id="Telefone" />
        </StyledLabel>
        
        <Button onClick={cadastrarEndereco}>Confirmar</Button>
      </Form>
    </FormContainer>
  );
};

export default TelaCadastroEndereco;
