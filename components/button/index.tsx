import { BtnProps } from '@/types/appTypes';
import './button.scss';

const Button = ({ text }: BtnProps) => {
  return (
    <button type='button' className='text-mono'>
      {text}
    </button>
  );
};

export default Button;
