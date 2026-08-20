'use client';

import Popper from '@mui/material/Popper';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from "@mui/material/styles";

import { AnimatePresence, motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { IoArrowDownCircle } from 'react-icons/io5';

import SkillStars from './skillStars';

import { Skill } from '@/src/types/skill';

interface Props {
  skill: Skill;
  anchorEl: HTMLElement | null;
  open: boolean;
  index: number;
  onClose: () => void;
}

const MAX_ROWS = 5;
const GRID_COLUMNS = 4;

export default function SkillDetail({ skill, anchorEl, open, index, onClose }: Props) {
  // const theme = useTheme();
  const isTouchLayout = useMediaQuery('(max-width:1200px)');

  const placement = index % GRID_COLUMNS < GRID_COLUMNS / 2 ? 'right-start' : 'left-start';

  const columns = Array.from(
    {
      length: Math.ceil(skill.details.length / MAX_ROWS),
    },
    (_, i) => skill.details.slice(i * MAX_ROWS, (i + 1) * MAX_ROWS)
  );

  const Content = (
    <motion.div
      initial={{
        opacity: 0,
        y: isTouchLayout ? 30 : 0,
        x: isTouchLayout ? 0 : -15,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: isTouchLayout ? 30 : 0,
        x: isTouchLayout ? 0 : -15,
        scale: 0.96,
      }}
      transition={{
        duration: 0.25,
      }}
      className="overflow-hidden rounded-t-3xl md:rounded-3xl border border-white/10 bg-gray-900/95 backdrop-blur-xl"
      style={{
        width: '100%',
        maxWidth: isTouchLayout ? '100vw' : 1000,
        maxHeight: '90dvh',
      }}
    >
      {/* Header */}

      <div
        className="relative p-8"
        style={{
          borderTop: `6px solid ${skill.color}`,
        }}
      >
        {isTouchLayout && (
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 12,
              top: 12,
              color: 'white',
            }}
          >
            <IoArrowDownCircle />
          </IconButton>
        )}

        <div className="flex justify-center gap-4">
          <skill.icon size={46} color={skill.color} />

          <div>
            <h3 className="text-2xl font-bold">{skill.name}</h3>

            <p className="mt-1 text-gray-400">{skill.experience}</p>
          </div>
        </div>

        <div className="mt-5">
          <SkillStars stars={skill.stars} />
        </div>
      </div>

      <Divider
        sx={{
          borderColor: 'rgba(255,255,255,.08)',
        }}
      />

      {/* Details */}

      <div className="p-8 max-h-[70vh] overflow-y-auto">
        <div className={`${isTouchLayout ? 'space-y-4' : 'flex gap-10'}`}>
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className={isTouchLayout ? '' : 'min-w-55 space-y-4'}>
              {column.map((detail, detailIndex) => (
                <motion.div
                  key={detail}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: (columnIndex * MAX_ROWS + detailIndex) * 0.05,
                    duration: 0.25,
                  }}
                  className="flex items-start gap-4 py-2"
                >
                  <FaCheckCircle size={18} color={skill.color} className="mt-1 shrink-0" />

                  <span className="leading-7 text-gray-300 wrap-break-word">{detail}</span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  if (isTouchLayout) {
    return (
      <Drawer
        anchor="bottom"
        open={open}
        onClose={onClose}
        slotProps={{
          paper: {
            sx: {
              background: 'transparent',
              boxShadow: 'none',
              overflow: 'hidden',
              paddingBottom: 'env(safe-area-inset-bottom)',
            },
          },
        }}
      >
        {Content}
      </Drawer>
    );
  }

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement={placement}
      modifiers={[
        {
          name: 'offset',
          options: {
            offset: [20, 0],
          },
        },
        {
          name: 'flip',
          enabled: true,
        },
        {
          name: 'preventOverflow',
          enabled: true,
        },
      ]}
      sx={{
        zIndex: 2000,
      }}
    >
      <AnimatePresence>{open && Content}</AnimatePresence>
    </Popper>
  );
}
