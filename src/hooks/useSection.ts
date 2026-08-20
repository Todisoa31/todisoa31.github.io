'use client';

import { useInView } from 'react-intersection-observer';

export function useSection() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  return { ref, inView };
}
