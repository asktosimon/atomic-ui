import 'tailwindcss/tailwind.css';

import type { Meta, StoryObj } from '@storybook/react';

import Flex from './Flex';

const meta: Meta<typeof Flex> = {
  component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  render: () => <Flex>HELLO</Flex>,
};
