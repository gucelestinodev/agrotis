import styled from 'styled-components';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'large';
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 40px;
  background-color: #f1f1f1;
  min-height: 100vh;
`;

export const FormCard = styled.div`
  background-color: #ffffff;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #006F59;
  padding: 0px 16px;
  align-items: center;
`;

export const ButtonSave = styled.button`
  background-color: #006F59;
  border: none;
  color: #ffffff;
  padding: 0px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  height: 36px;

  &:hover {
    background-color: #00947A;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

export const FormTitle = styled.h1`
  color: #ffffff;
  font-size: 22px;
  text-align: center;
  font-weight: 400;
  margin: 12px 0px;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 0px 16px;

  & > div {
    flex: 1;
    min-width: 200px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Separator = styled.div`
  margin: 0px 12px;
`;

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%; 
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 0px 16px; 

  > * {
    flex: 1;
    max-width: 50%;
  }
`;

export const DualSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px; 
  width: 100%; 
  background-color: #F1F1F1;
  
  > * {
    flex: 1;
    max-width: 50%;
  }
`;

export const Button = styled.button<ButtonProps>`
  background-color: transparent; 
  color: black;
  border: none;
  padding: 12px;
  cursor: pointer; 
  text-align: start;
  font-size: ${({ size }) => (size === 'large' ? '16px' : '14px')};
  
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 6px;
  margin: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-height: 260px; 
  overflow-y: auto;

  h4 {
    margin-bottom: 8px;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888888;
    border-radius: 6px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #666666;
  }
`;

export const CnpjText = styled.span`
  display: block;
  font-size: 12px;
  opacity: 0.5;
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  
  &::after {
    content: '';
    border: 8px solid #f3f3f3; 
    border-top: 8px solid #006F59;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;