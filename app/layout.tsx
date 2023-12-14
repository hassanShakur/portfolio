'use client';
import Header from '@/components/header';
import './globals.scss';

import store from '@/redux/store';
import { Provider } from 'react-redux';
import Footer from '@/components/footer';
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

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
          <form name='contact' id='contact'>
            <div>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' id='name' />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' />
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='message' rows={5} />
            </div>
            <div>
              <button type='submit'>Send</button>
            </div>
          </form>
          <Footer />
        </body>
        {/* <body className={inter.className}>{children}</body> */}
      </html>
    </Provider>
  );
}
