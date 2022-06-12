import React from 'react';
import { PasswordForce, PasswordForceLine, PasswordForceText } from './styles';

interface IProps {
  password: string;
}

const PasswordValid: React.FC<IProps> = ({ password }) => {
  const checkLowerCase = (): boolean => /[a-z]/.test(password || '');
  const checkUppercase = (): boolean => /[A-Z]/.test(password || '');
  const checkDigit = (): boolean => /[0-9]/.test(password || '');
  const checkChar = (): boolean =>
    /[@~`!#$%\\^&*+=\-\\[\]\\';,/{}|\\":<>\\?]/g.test(password || '');

  let count = 0;

  checkLowerCase() && count++;
  checkUppercase() && count++;
  checkDigit() && count++;
  checkChar() && password.length >= 8 && count++;

  return (
    <>
      <PasswordForce>
        <PasswordForceLine isValid={count >= 1} />
        <PasswordForceLine isValid={count >= 2} />
        <PasswordForceLine isValid={count >= 3} />
        <PasswordForceLine isValid={count >= 4} />
      </PasswordForce>
      <PasswordForceText>
        Use 8 or more characters with a mix of letters, numbers & symbols.
      </PasswordForceText>
    </>
  );
};

export default PasswordValid;
