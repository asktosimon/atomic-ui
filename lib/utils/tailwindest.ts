import { type Tailwindest, createTools } from 'tailwindest';

type TailwindCustom = Tailwindest<{}, {}>;

type Tailwind = Required<TailwindCustom>;

const tw = createTools<TailwindCustom>();

export { tw, type Tailwind };
