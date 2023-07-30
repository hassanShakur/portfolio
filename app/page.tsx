import About from '@/components/about';
import Hero from '@/components/hero';
import Work from '@/components/work';

export const metadata = {
  title: 'Hassan Shakur',
  description:
    'Hassan Shakur is a software engineer who specializes in building exceptional web & app products.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
    </main>
  );
}
