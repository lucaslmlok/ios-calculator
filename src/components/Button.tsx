import type { FC } from 'react';
import clsx from 'clsx';
import { useCal, useCalDispatch } from 'context/Provider';
import { getActions } from 'context/actions';

interface Props {
  color?: 'primary' | 'secondary' | 'operator';
  className?: string;
  children: string;
}

const Button: FC<Props> = ({ color = 'primary', className, children }) => {
  const { display, operator } = useCal();
  const dispatch = useCalDispatch();
  const isActiveOperator = operator === children && !display;

  return (
    <button
      type="button"
      className={clsx([
        'flex items-center justify-center bg-zinc-700 rounded-full text-4xl font-medium aspect-square leading-none transition-colors duration-100 active:bg-zinc-500',
        color === 'secondary' && 'bg-zinc-400 text-black active:bg-zinc-200',
        color === 'operator' && 'bg-amber-500 text-5xl active:bg-amber-300',
        isActiveOperator && 'bg-white text-amber-500',
        className,
      ])}
      onClick={() =>
        dispatch({ type: getActions(children), payload: children })
      }
    >
      {children}
    </button>
  );
};

export default Button;
