'use client';

import { Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function Accueil() {
  return (
    <section className="flex  items-center justify-center px-4 sm:px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
            wrap-break-word
          "
        >
          TODISOA HERINJANAHARY
          <span className="block text-yellow-400">Jean Albin Elie</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            mt-6
            text-lg
            sm:text-xl
            md:text-2xl
            text-gray-300
          "
        >
          Fullstack JavaScript Developer
        </motion.h2>

        <p
          className="
            mt-8
            max-w-2xl
            mx-auto
            text-sm
            sm:text-base
            text-gray-400
            leading-7
            sm:leading-8
          "
        >
          Plus de 6 ans d&apos;expérience dans le développement d&apos;applications web performantes
          avec React, Next.js, Node.js et NestJS.
        </p>

        <div className="mt-10 flex justify-center">
          <Button
            component="a"
            href="/cv/Todisoa-Herinjanahary.pdf"
            download
            variant="contained"
            size="large"
            sx={{
              width: {
                xs: '100%',
                sm: 'auto',
              },
              maxWidth: 320,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: 'none',
            }}
          >
            Télécharger mon CV
          </Button>
        </div>
      </div>
    </section>
  );
}
