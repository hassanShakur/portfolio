import { TbMail } from 'react-icons/tb';
import { FiPhoneCall } from 'react-icons/fi';
import './form.scss';

const ContactForm = () => {
  return (
    <div id='connect'>
      <div id='connect-side'>
        <span>
          <h3>Let&apos;s Connect</h3>
          <p>Send me an email or give me a call</p>
        </span>
        <span id='iconed'>
          <TbMail />
          <p>dev.hassanshakur@gmail.com</p>
        </span>
        <span id='iconed'>
          <FiPhoneCall />
          <p>+254 796 618 918</p>
        </span>
      </div>

      <div id='connect-form'>
        <form action='https://formspree.io/f/xyyqrraz' method='POST'>
          <input
            required
            name='name'
            type='text'
            placeholder='Name'
          />
          <input type='email' name='email' placeholder='Email' />
          <textarea required name='message' placeholder='Message' />
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
