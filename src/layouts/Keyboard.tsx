import Button from 'components/Button';
import { useCal } from 'context/Provider';

const Keyboard = () => {
  const { display } = useCal();

  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-4">
      <Button color="secondary">{Number(display) ? 'C' : 'AC'}</Button>
      <Button color="secondary">+/-</Button>
      <Button color="secondary">%</Button>
      <Button color="operator">÷</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button color="operator" className="pb-2">
        x
      </Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button color="operator">-</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button color="operator">+</Button>
      <Button className="col-span-2 aspect-auto">0</Button>
      <Button>.</Button>
      <Button color="operator">=</Button>
    </div>
  );
};

export default Keyboard;
