'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from "@mui/material/styles";

import SkillStars from './skillStars';
import SkillDetail from './skillDetail';

import { Skill } from '@/src/types/skill';

interface Props {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: Props) {
  // const theme = useTheme();
  const isTouchLayout = useMediaQuery('(max-width:1200px)');

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const Icon = skill.icon;

  // Desktop uniquement
  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (isTouchLayout) return;

    setAnchorEl(event.currentTarget);
  };

  // Desktop uniquement
  const handleMouseLeave = () => {
    if (isTouchLayout) return;

    setAnchorEl(null);
  };

  // Mobile uniquement
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!isTouchLayout) return;

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <motion.div
        whileHover={
          !isTouchLayout
            ? {
                y: -10,
                scale: 1.04,
              }
            : undefined
        }
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 18,
        }}
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className="
            group
            relative
            cursor-pointer
            rounded-3xl
            border
            border-white/10
            bg-gray-900/70
            backdrop-blur-xl
            p-8
            transition-all
            duration-300
            overflow-hidden
          "
          style={{
            boxShadow: open ? `0 0 35px ${skill.color}55` : '0 10px 30px rgba(0,0,0,.35)',
          }}
        >
          {/* Glow */}

          <div
            className="
              absolute
              -top-10
              -right-10
              w-32
              h-32
              rounded-full
              blur-3xl
              opacity-20
              transition-opacity
              duration-500
              group-hover:opacity-40
            "
            style={{
              background: skill.color,
            }}
          />

          {/* Icon */}

          <div className="relative flex justify-center">
            <Icon
              size={60}
              color={skill.color}
              className="
                transition-transform
                duration-300
                group-hover:scale-110
                group-hover:-translate-y-1
              "
            />
          </div>

          {/* Nom */}

          <h3
            className="
              relative
              mt-6
              justify-center
              flex
              items-center
              gap-2
              text-gray-200
              text-xl
              font-bold
            "
          >
            {skill.name}
          </h3>

          {/* Expérience */}

          <p
            className="
              relative
              mt-2
              text-center
              text-sm
              text-gray-400
            "
          >
            {skill.experience}
          </p>

          {/* Étoiles */}

          <div className="relative mt-5 flex justify-center">
            <SkillStars stars={skill.stars} />
          </div>

          {/* Indication sur mobile */}

          {isTouchLayout && (
            <p className="mt-4 text-center text-xs text-gray-500">Appuyez pour voir les détails</p>
          )}
        </div>
      </motion.div>

      <SkillDetail
        skill={skill}
        anchorEl={anchorEl}
        open={open}
        index={index}
        onClose={handleClose}
      />
    </>
  );
}
