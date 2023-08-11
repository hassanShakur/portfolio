import { Dispatch, SetStateAction } from "react";

const letters = 'abcdefghijklmnopqrstuvwxyz';

const shuffler = (
  setText: Dispatch<SetStateAction<string>>,
  shuffleText: string
) => {
  let iteration = 0;

  const interval = setInterval(() => {
    setText((prev) =>
      prev
        .split('')
        .map((letter, index) => {
          if (index < iteration) return shuffleText[index];
          if (letter === ' ') return ' ';
          return letters[Math.floor(Math.random() * 26)];
        })
        .join('')
    );

    if (iteration >= shuffleText.length) clearInterval(interval);

    iteration += shuffleText.length / 50;
  }, 70);
};

export default shuffler;
