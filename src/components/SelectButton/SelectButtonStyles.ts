import styled from 'styled-components';

export const ButtonStyle = styled.button`
  display: flex;
  width: 100%;
  text-align: start;
  margin-bottom: 4px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  padding: 8px 0;
  cursor: pointer;
  font-size: 1rem;
  color: #666666;
  font-weight: 400;
  justify-content: space-between;

  &.selected {
    color: #000000;
  }

  &:hover {
    border-bottom: 2px solid #006F59;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #006F59;
  }
`;

export const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
`;

export const ClearIcon = styled.img`
  width: 12px;
  cursor: pointer;
  margin-right: 12px;
`;

export const CnpjText = styled.div`
  font-size: 12px;
  margin: 0;
  color: #666666;
`;
