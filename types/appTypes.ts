import { StaticImageData } from 'next/image';

export type Store = { menu: { isOpen: boolean } };
export type BtnProps = { text: string };
export type SectionTitleProps = { number: number; title: string };
export type ProjectProps = {
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
};
export type CardProjectProps = {
  id: number;
  name: string;
  github: string;
  live: string;
  techs: {
    id: number;
    name: string;
  }[];
  summary: string;
};
