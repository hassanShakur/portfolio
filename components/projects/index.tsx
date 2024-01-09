import SectionTitle from '../sectionTitle';
import projects from '@/data/projects';
import OtherProjects from './others';
import Project from './Project';
import './projects.scss';

const Projects = () => {
  return (
    <section id='projects'>
      <SectionTitle number={3} title="some things i've built" />
      <div className='projects'>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      <OtherProjects />
    </section>
  );
};

export default Projects;
