import { SectionTitleProps } from '@/types/appTypes';
import './title.css';

const SectionTitle = ({ number, title }: SectionTitleProps) => {
  return (
    <h2>
      <span className='number'>{number}.</span>
      <span className='section-title'>{title}</span>
      <div className='line'></div>
    </h2>
  );
};

export default SectionTitle;
