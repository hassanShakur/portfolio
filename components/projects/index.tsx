import SectionTitle from '../sectionTitle';
import './projects.scss';
import projects from '@/data/projects';
import Project from './Project';
// import OtherProjects from './others';

const Projects = () => {
  return (
    <section id='projects'>
      <SectionTitle number={3} title="some things i've built" />
      <div className='projects'>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
      {/* <OtherProjects /> */}
    </section>
  );
};

export default Projects;
