import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f1f1f1;
  min-height: 100vh;
`;

export const FormCard = styled.div`
  background-color: #ffffff;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #006F59;
  padding: 0px 15px;
`;

export const Button = styled.button`
  background-color: #006F59;
  border: none;
  color: #ffffff;
  padding: 4px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  &:hover {
    background-color: #00947A;
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export const FormTitle = styled.h1`
  color: #ffffff;
  font-size: 22px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 400;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 0px 15px;

  & > div {
    flex: 1;
    min-width: 200px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;



