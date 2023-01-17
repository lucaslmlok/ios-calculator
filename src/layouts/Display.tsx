import type { FC } from 'react';
import { Textfit } from 'react-textfit';
import clsx from 'clsx';
import { useCal } from 'context/Provider';

interface Props {
  className?: string;
}

const Display: FC<Props> = ({ className }) => {
  const { display } = useCal();

  return (
    <div className={clsx('flex items-end min-h-[12rem] px-2', className)}>
      <Textfit mode="single" max={80} className="w-full text-right">
        {display.slice(0, 10)}
      </Textfit>
    </div>
  );
};

export default Display;
