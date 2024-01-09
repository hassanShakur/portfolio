'use client';
import { Provider } from 'react-redux';

import ContactForm from '@/components/contact/Form';
import Footer from '@/components/footer';
import Header from '@/components/header';
import store from '@/redux/store';
import './globals.scss';

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
      </html>
    </Provider>
  );
}
