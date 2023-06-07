import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 200px;

  h1 {
    margin: 32px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Input = styled.input`
  padding: 8px;
  margin-left: 16px;
`;

export const Button = styled.button`
  background-color: #ff9421;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  border: none;
  color: white;
  margin-top: 32px;
  cursor: pointer;
  font-weight: bold;
`;

export const StyledLabel = styled.label`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
