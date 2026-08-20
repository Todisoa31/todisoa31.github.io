'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    number: '6+',
    label: "Années d'expérience",
  },
  {
    number: '15+',
    label: 'Projets réalisés',
  },
  {
    number: '40%',
    label: 'Gain de performance',
  },
  {
    number: '5+',
    label: 'Secteurs métiers',
  },
];

export default function Stats() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:mx-auto sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              className="
                bg-gray-800
                border
                border-gray-700
                rounded-2xl
                p-5 sm:p-8
                text-center
                overflow-hidden
              "
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-yellow-400">{stat.number}</h3>

              <p className="mt-2 text-sm sm:text-base text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
