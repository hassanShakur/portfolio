import { StaticImageData } from 'next/image';

interface CertType {
  id: number;
  name: string;
  origin: string;
  mainCert: StaticImageData;
  summary: string;
  minis: {
    id: number;
    course: string;
    description: string;
    certificate: StaticImageData;
  }[];
}

export default CertType;
