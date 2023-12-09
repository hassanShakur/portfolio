import PMMaster from '@/images/certificates/PM/master.jpg';
import PM_1 from '@/images/certificates/PM/pm-1.jpg';
import PM_2 from '@/images/certificates/PM/pm-2.jpg';
import PM_3 from '@/images/certificates/PM/pm-3.jpg';
import PM_4 from '@/images/certificates/PM/pm-4.jpg';
import PM_5 from '@/images/certificates/PM/pm-5.jpg';
import PM_6 from '@/images/certificates/PM/pm-6.jpg';

const googlePMCerts = {
  origin: 'Google & Coursera',
  mainCert: PMMaster,
  summary:
    'In this course I gained an immersive understanding of the practices and skills needed to succeed in an entry-level project management role including how to create effective project documentation and artifacts throughout the various phases of a project, the foundations of Agile project management, with a focus on implementing Scrum events, building Scrum artifacts, and understanding Scrum roles & practicing strategic communication, problem-solving, and stakeholder management through real-world scenarios',
  minis: [
    {
      id: 0,
      course: 'Foundations of Project Management',
      description:
        'Studied project management skills, roles, and responsibilities across a variety of industries, understood the project management life cycle and compare different program management methodologies and got a grip of organizational structure and organizational culture and explain how it impacts project management.',
      certificate: PM_1,
    },
    {
      id: 1,
      course: 'Project Initiation: Starting a Successful Project',
      description:
        'Introduced to the significance of the initiation phase of the project life cycle, learnt the key components of project charters and develop a project charter for project initiation. I also completed a stakeholder analysis and utilize RACI charts to define and communicate project team member responsibilities, and evaluated various project management tools to meet project needs. ',
      certificate: PM_2,
    },
    {
      id: 2,
      course: 'Project Planning: Putting it All Together',
      description:
        'Studied the components of the project planning phase and their significance, practiced using tools and best practices to build a project plan and risk management plan. I also understood how to estimate, track, and maintain a budget, together with drafting a communication plan and explain how to manage it.',
      certificate: PM_3,
    },
    {
      id: 3,
      course: 'Project Execution: Running the Project',
      description:
        "Implemented the key quality management concepts of quality standards, quality planning, quality assurance, and quality control. Demonstrated how to prioritize and analyze data and how to communicate a project's data-informed story. Had a deep dive into the stages of team development and how to manage team dynamics, and finished up with the steps of the closing process and create project closing documentation.",
      certificate: PM_4,
    },
    {
      id: 4,
      course: 'Agile Project Management',
      description:
        'The Agile project management approach and philosophy, including values and principles. Studied the pillars of Scrum and how they support Scrum values, and the five important Scrum events and how to set up each event for a Scrum team. Learnt how to coach an Agile team and help them overcome challenges.',
      certificate: PM_5,
    },
    {
      id: 5,
      course:
        'Capstone: Applying Project Management in the Real World',
      description:
        'Understood the Agile project management approach and philosophy, including values and principles, the pillars of Scrum and how they support Scrum values, the five important Scrum events and how to set up each event for a Scrum team. I also understood how to coach an Agile team and help them overcome challenges.',
      certificate: PM_6,
    },
  ],
};

export default googlePMCerts;
