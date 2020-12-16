import React, { ButtonHTMLAttributes } from 'react';

import { Button as CustomButtom } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...rest }) => (
  <CustomButtom type="button" {...rest}>
    {isLoading ? 'Carregando...' : children}
  </CustomButtom>
);

export default Button;
