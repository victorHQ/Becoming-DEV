import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    color: white;
  }

  input {
    height: 40px;
    margin-top: 5px;
  }

  .btn {
    width: initial;
    margin: initial;
  }
`;
