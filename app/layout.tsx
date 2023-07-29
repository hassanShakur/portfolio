import Header from '@/components/Header';
import './globals.css';
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hassan Shakur',
  description:
    'Hassan Shakur is a software engineer who specializes in building exceptional web & app products.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
