interface ProjectCardType {
  id: number;
  name: string;
  github: string;
  live?: string;
  techs: {
    id: number;
    name: string;
  }[];
  summary: string;
}

export default ProjectCardType;
