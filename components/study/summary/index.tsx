import Image from 'next/image';
import projectImg from '@/images/hack-3.jpg';
import './summary.scss'

const StudySummary = () => {
  return (
    <div className='study-summary'>
      <h3>My Study Journey</h3>
      <div className='summary-content'>
        <div className='text'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur vel in sequi optio aliquid nemo ipsam atque earum
            aliquam reprehenderit, consequuntur quae est! Minima nemo
            tenetur dicta delectus necessitatibus nostrum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus nesciunt voluptatem mollitia modi voluptas quod
            officiis non optio provident cum?
          </p>
        </div>
        <div className='certified'>
          <Image src={projectImg} alt='test' placeholder='blur' />
        </div>
      </div>
    </div>
  );
};

export default StudySummary;
