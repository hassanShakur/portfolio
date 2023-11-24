import About from '@/components/about';
import Contact from '@/components/contact';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
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
      <Projects />
      <Contact />
    </main>
  );
}

// TODO: Add skills learnt in each coursera certificate
// TODO: Use cert badges for microverse and coursera

// For production Image Optimization with Next.js, the optional 'sharp' package is strongly recommended. Run 'yarn add sharp', and Next.js will use it automatically for Image Optimization.
