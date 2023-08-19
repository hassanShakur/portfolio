import projectImg from '@/images/hack-3.jpg';
import Image from 'next/image';
import './study.css';

export const metadata = {
  title: 'Hassan | Study Journey',
  description:
    "Hassan Shakur's learning journey, education & certifications .",
};

const StudyPage = () => {
  return (
    <section id='study'>
      <div className='cert'>
        <div className='main-cert'>
          <Image
            src={projectImg}
            alt='test img'
            placeholder='blur'
            style={{
              borderRadius: '8px',
              //   objectFit: 'cover',
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
        <div className='cert-text'>
          <p className='text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloribus sit architecto ipsum et officia error! Mollitia
            fugit similique nesciunt, consequatur dolorum quas ipsam
            rerum, cumque eos, repellat ex consectetur corrupti!
          </p>
          <div className='cert-gallery'>
            <div className='g-img'>
              <Image src={projectImg} alt='test img' />
            </div>
            <div className='g-img'>
              <Image src={projectImg} alt='test img' />
            </div>
            <div className='g-img'>
              <Image src={projectImg} alt='test img' />
            </div>
            <div className='g-img'>
              <Image src={projectImg} alt='test img' />
            </div>
            <div className='g-img'>
              <Image src={projectImg} alt='test img' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyPage;
