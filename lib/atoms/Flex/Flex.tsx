import React, { PropsWithChildren } from 'react';
import { type GetVariants } from 'tailwindest';

import { Tailwind, tw } from '@/utils/tailwindest';

const flex = tw.variants({
  variants: {
    display: {
      default: {
        display: 'flex',
      },
      'inline-flex': {
        display: 'inline-flex',
      },
    },
  },
});

interface Props extends GetVariants<typeof flex> {
  height: Tailwind['height'];
  width: Tailwind['width'];
  gapX: Tailwind['gapX'];
  gapY: Tailwind['gapY'];
  Tag: 'div' | 'header';
}

const Flex: React.FC<PropsWithChildren<Props>> = ({
  display = 'default',
  height = 'h-fit',
  width = 'w-full',
  gapX = 'gap-x-0',
  gapY = 'gap-y-0',
  children,
  Tag = 'div',
}) => (
  <Tag className={flex.compose({ height, width, gapX, gapY }).class({ display })}>{children}</Tag>
);

export default Flex;
