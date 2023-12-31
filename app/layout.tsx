'use client';
import Header from '@/components/header';
import './globals.scss';
import './form.scss';

import store from '@/redux/store';
import { Provider } from 'react-redux';
import Footer from '@/components/footer';
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
import { TbMail } from 'react-icons/tb';
import { FiPhoneCall } from 'react-icons/fi';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang='en'>
        <body>
          <Header />
          {children}
          {/* Contact form */}
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
                <p>+254 707 710 144</p>
              </span>
            </div>

            <div id='connect-form'>
              <form
                action='https://formspree.io/f/xyyqrraz'
                method='POST'
              >
                <input
                  required
                  name='name'
                  type='text'
                  placeholder='Name'
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                />
                <textarea
                  required
                  name='message'
                  placeholder='Message'
                />
                <button type='submit'>Send</button>
              </form>
            </div>
          </div>
          <Footer />
        </body>
        {/* <body className={inter.className}>{children}</body> */}
      </html>
    </Provider>
  );
}
