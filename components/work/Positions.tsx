import { positions } from '@/helpers/utils';
import './positions.css';

const Positions = ({ activeTab }: { activeTab: number }) => {
  return (
    <div className='positions'>
      {positions.map((pos) => (
        <div
          key={pos.id}
          className={`position ${
            activeTab === pos.id ? 'show-position' : ''
          }`}
        >
          <h3 className='position-title'>
            {pos.title} <span className='clg'>@{pos.company}</span>
          </h3>

          <p className='position-period'>{pos.period}</p>

          <ul className='position-roles'>
            {pos.roles.map((role) => (
              <li key={role.id} className='role'>
                <span className='clg'>⇨</span>
                <span>{role.description}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Positions;
