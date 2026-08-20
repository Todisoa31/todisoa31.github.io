'use client';

import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface Props {
  stars: number; // ex: 2.5, 3, 4.5
}

export default function SkillStars({ stars }: Props) {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: 5 }, (_, index) => {
        const value = index + 1;

        if (stars >= value) {
          return <FaStar key={index} className="text-yellow-400" />;
        }

        if (stars >= value - 0.5) {
          return <FaStarHalfAlt key={index} className="text-yellow-400" />;
        }

        return <FaRegStar key={index} className="text-gray-600" />;
      })}
    </div>
  );
}