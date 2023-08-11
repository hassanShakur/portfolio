'use client';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import shuffler from './shuffle';

const useShuffle = ({
  shuffleText,
  delay = 600,
}: {
  shuffleText: string;
  delay?: number;
}) => {
  const [text, setText] = useState(shuffleText);

  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
    delay,
  });

  useEffect(() => {
    if (!inView) return;
    shuffler(setText, shuffleText);
  }, [inView, shuffleText]);
  return { ref, inView, text };
};

export default useShuffle;
