import { saveAs } from 'file-saver';
import Button from '../button';

const Resume = () => {
  const saveResume = () => {
    saveAs('/docs/resume.pdf', 'hassanResume.pdf');
  };

  return (
    <span role='button' onClick={saveResume}>
      <Button text='resume' />
    </span>
  );
};

export default Resume;
