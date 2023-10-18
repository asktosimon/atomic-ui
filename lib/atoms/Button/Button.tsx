import React from 'react';

import { tw } from '../../utils/customized-tailwindest';

const style = tw.style({
  display: 'flex',
});

const Button: React.FC = () => (
  <button type="button" className={style.class}>
    HELLO
  </button>
);

export default Button;
