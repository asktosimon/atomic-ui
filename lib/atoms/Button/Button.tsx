import React from 'react';

import { tw } from '@/utils/tailwindest';

const style = tw.style({
  display: 'flex',
  backgroundColor: 'bg-amber-300',
});

const Button: React.FC = () => (
  <button type="button" className={style.class}>
    HELLO
  </button>
);

export default Button;
