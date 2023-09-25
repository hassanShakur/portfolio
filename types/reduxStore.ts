import { StaticImageData } from 'next/image';

interface ReduxStoreType {
  menu: {
    isOpen: boolean;
  };
  gallery: {
    isOpen: boolean;
    currentCertIndex: number;
    modalCerts: {
      id: number;
      course: string;
      certificate: StaticImageData;
      description: string;
    }[];
  };
}

export default ReduxStoreType;
