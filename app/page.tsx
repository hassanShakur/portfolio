import Hero from '@/components/hero';
import About from '@/components/about';
import Work from '@/components/work';
import Projects from '@/components/projects';
import Contact from '@/components/contact';

export const metadata = {
  title: 'Hassan Shakur',
  description:
    'Hassan Shakur is a software engineer who specializes in building exceptional web & app products.',
  keywords:
    'Hassan Shakur, Hassan, Shakur, Hassan Shakur portfolio, software engineer, web developer, full stack developer, front end developer, back end developer, mobile developer, web app developer, software developer, software engineer, full stack engineer, front end engineer, back end engineer, web app engineer, web designer, web developer in Nairobi, Kenya',
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
// TODO: Use an icon from Angela Yu on each section
        


// For production Image Optimization with Next.js, the optional 'sharp' package is strongly recommended. Run 'yarn add sharp', and Next.js will use it automatically for Image Optimization.
