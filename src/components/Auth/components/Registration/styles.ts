import styled from 'styled-components';

export const Container = styled.div``;

export const PasswordForce = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
`;

interface IPasswordForceLine {
  isValid: boolean;
}

export const PasswordForceLine = styled.div<IPasswordForceLine>`
  background-color: ${props => (props.isValid ? '#50cd89' : '#e4e6ef')};
  border-radius: 0.475rem;
  margin-right: 0.5rem;
  flex-grow: 1;
  height: 5px;
`;

export const PasswordForceText = styled.div`
  color: #a1a5b7;
  font-size: 13px;
`;
