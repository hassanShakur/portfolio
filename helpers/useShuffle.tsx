'use client';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const letters = 'abcdefghijklmnopqrstuvwxyz';

const useShuffle = ({
  shuffleText,
  delay = 0,
}: {
  shuffleText: string;
  delay?: number;
}) => {
  const [text, setText] = useState(shuffleText);

  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
    delay,
  });

  useEffect(() => {
    let iteration = 0;
    if (!inView) return;

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

      iteration += shuffleText.length / 40;
    }, 10);
  }, [inView, shuffleText]);
  return { ref, inView, text };
};

export default useShuffle;
