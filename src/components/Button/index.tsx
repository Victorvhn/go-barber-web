import React, { ButtonHTMLAttributes } from 'react';

import { Button as CustomButtom } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <CustomButtom type="button" {...rest}>
    {children}
  </CustomButtom>
);

export default Button;
