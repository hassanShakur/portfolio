import { StaticImageData } from 'next/image';

interface ReduxStoreType {
  menu: {
    isOpen: boolean;
  };
  gallery: {
    isOpen: boolean;
    currentImages: {
      id: number;
      course: string;
      certificate: StaticImageData;
    }[];
    activeImg: number;
  };
}

export default ReduxStoreType;
