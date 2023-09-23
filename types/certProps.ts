import { StaticImageData } from 'next/image';

interface CertProps {
  id: number;
  origin: string;
  mainCert: StaticImageData;
  summary: string;
  minis: {
    id: number;
    course: string;
    certificate: StaticImageData;
  }[];
}

export default CertProps;
