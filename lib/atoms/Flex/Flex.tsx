import React, { PropsWithChildren } from 'react';

import { Tailwind, tw } from '@/utils/tailwindest';

const flex = tw.style({
  display: 'flex',
  width: 'w-full',
  justifyContent: 'justify-center',
  alignItems: 'items-center',
});

type Props = {
  height?: Tailwind['height'];
  width?: Tailwind['width'];
  gapX?: Tailwind['gapX'];
  gapY?: Tailwind['gapY'];
  justifyContent?: Tailwind['justifyContent'];
  alignItems?: Tailwind['alignItems'];
  Tag?: 'div' | 'header';
  display?: 'flex' | 'inline-flex';
};

const Flex: React.FC<PropsWithChildren<Props>> = ({
  display,
  height,
  width,
  gapX,
  gapY,
  children,
  Tag = 'div',
  justifyContent,
  alignItems,
}) => (
  <Tag
    className={
      flex.compose({ height, width, gapX, gapY, justifyContent, alignItems, display }).class
    }
  >
    {children}
  </Tag>
);

export default Flex;
