import { StaticImageData } from 'next/image';

interface ProjectType {
  id: number;
  name: string;
  badge: string;
  image: StaticImageData;
  github: string;
  live: string;
  techs: {
    id: number;
    name: string;
  }[];
  summary: string;
}

export default ProjectType;
