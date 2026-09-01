'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '@mui/material/useMediaQuery';

import SkillStars from './skillStars';
import SkillDetail from './skillDetail';
import { Skill } from '@/src/types/skill';

interface Props {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: Props) {
  const isTouchLayout = useMediaQuery('(max-width:1200px)');
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const Icon = skill.icon;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (!isTouchLayout) setAnchorEl(e.currentTarget);
  };

  const handleMouseLeave = () => {
    if (!isTouchLayout) setAnchorEl(null);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (isTouchLayout) setAnchorEl(e.currentTarget);
  };

  return (
    <>
      <motion.div
        whileHover={!isTouchLayout ? { y: -10, scale: 1.04 } : undefined}
        transition={{ type: 'spring', stiffness: 250, damping: 18 }}
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-gray-900/70 p-8 backdrop-blur-xl transition-all duration-300"
          style={{
            boxShadow: open
              ? `0 0 35px ${skill.color}55`
              : '0 10px 30px rgba(0,0,0,.35)',
          }}
        >
          <div
            className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-40"
            style={{ background: skill.color }}
          />

          <div className="relative flex justify-center">
            <Icon
              size={60}
              color={skill.color}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
            />
          </div>

          <h3 className="relative mt-6 flex items-center justify-center gap-2 text-xl font-bold text-gray-200">
            {skill.name}
          </h3>

          <p className="relative mt-2 text-center text-sm text-gray-400">
            {skill.experience}
          </p>

          <div className="relative mt-5 flex justify-center">
            <SkillStars stars={skill.stars} />
          </div>

          {isTouchLayout && (
            <p className="mt-4 text-center text-xs text-gray-500">
              Appuyez pour voir les détails
            </p>
          )}
        </div>
      </motion.div>

      <SkillDetail
        skill={skill}
        anchorEl={anchorEl}
        open={open}
        index={index}
        onClose={() => setAnchorEl(null)}
      />
    </>
  );
}
