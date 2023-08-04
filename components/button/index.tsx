import { BtnProps } from '@/types/appTypes';
import './button.css';

const Button = ({ text }: BtnProps) => {
  return (
    <button type='button' className='text-mono'>
      {text}
    </button>
  );
};

export default Button;
