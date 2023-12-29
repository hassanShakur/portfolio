'use client';
import Header from '@/components/header';
import './globals.scss';

import store from '@/redux/store';
import { Provider } from 'react-redux';
import Footer from '@/components/footer';
import ContactForm from '@/components/contact/Form';
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
          <ContactForm />
          <Footer />
        </body>
        {/* <body className={inter.className}>{children}</body> */}
      </html>
    </Provider>
  );
}
