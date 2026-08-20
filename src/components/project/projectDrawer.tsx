'use client';

import {
  Box,
  Chip,
  Divider,
  Drawer,
  Stack,
  Typography,
  Card,
  CardContent,
  ImageList,
  ImageListItem,
  IconButton,
} from '@mui/material';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

import { Project } from '../../types/project';

interface Props {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectDrawer({ project, open, onClose }: Props) {
  if (!project) return null;

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: {
              xs: '100%',
              sm: 600,
              md: 700,
            },
            bgcolor: '#111827',
            color: 'white',
          },
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          overflowY: 'auto',

          scrollbarWidth: 'none',
          msOverflowStyle: 'none',

          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {/* ================= HERO ================= */}

        <Box
          sx={{
            position: 'relative',
            minHeight: {
              xs: 260,
              md: 320,
            },
            overflow: 'hidden',
          }}
        >
          {/* Image */}

          <Box
            component="img"
            src={project.thumbnail}
            alt={project.title}
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Overlay */}

          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              background:
                'linear-gradient(to top, rgba(17,24,39,.95), rgba(17,24,39,.35), transparent)',
            }}
          />

          {/* Back Button */}

          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',

              top: {
                xs: 12,
                md: 20,
              },

              left: {
                xs: 12,
                md: 20,
              },

              width: 48,
              height: 48,

              zIndex: 10,

              bgcolor: 'rgba(17,24,39,.55)',

              backdropFilter: 'blur(12px)',

              border: '1px solid rgba(255,255,255,.25)',

              color: 'white',

              transition: 'all .3s ease',

              '&:hover': {
                bgcolor: 'rgba(17,24,39,.85)',
                transform: 'translateX(-4px)',
              },
            }}
          >
            <ArrowBackIosNewRoundedIcon fontSize="small" />
          </IconButton>

          {/* Title */}

          <Box
            sx={{
              position: 'absolute',

              bottom: {
                xs: 16,
                md: 24,
              },

              left: {
                xs: 16,
                md: 24,
              },

              right: {
                xs: 16,
                md: 24,
              },

              zIndex: 5,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,

                fontSize: {
                  xs: '1.8rem',
                  md: '2.2rem',
                },

                lineHeight: 1.2,

                textShadow: '0 4px 15px rgba(0,0,0,.5)',
              }}
              gutterBottom
            >
              {project.title}
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,.8)',

                fontSize: {
                  xs: '.9rem',
                  md: '1rem',
                },

                lineHeight: 1.6,
              }}
            >
              {project.shortDescription}
            </Typography>
          </Box>
        </Box>

        {/* ================= CONTENT ================= */}

        <Box sx={{ p: 4 }}>
          {/* Chips */}

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{
              flexWrap: 'wrap',
              mb: 4,
            }}
          >
            <Chip label={project.company} color="primary" />

            <Chip label={project.period} variant="outlined" />

            <Chip label={project.sector} variant="outlined" />

            <Chip
              label={project.status}
              color={project.status === 'Public' ? 'success' : 'warning'}
            />
          </Stack>

          {/* Vue d'ensemble */}

          <Card
            sx={{
              mb: 3,
              bgcolor: 'rgba(255,255,255,.04)',
              border: '1px solid rgba(255,255,255,.06)',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                }}
              >
                Vue d&apos;ensemble
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  lineHeight: 1.9,
                }}
              >
                {project.overview}
              </Typography>
            </CardContent>
          </Card>

          {/* Défi */}

          <Card
            sx={{
              mb: 3,
              bgcolor: 'rgba(255,99,99,.08)',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                }}
              >
                Défi
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  lineHeight: 1.9,
                }}
              >
                {project.challenge}
              </Typography>
            </CardContent>
          </Card>

          {/* Solution */}

          <Card
            sx={{
              mb: 3,
              bgcolor: 'rgba(59,130,246,.08)',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                }}
              >
                Solution
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  lineHeight: 1.9,
                }}
              >
                {project.solution}
              </Typography>
            </CardContent>
          </Card>

          {/* Résultat */}

          <Card
            sx={{
              mb: 4,
              bgcolor: 'rgba(34,197,94,.08)',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                }}
              >
                Résultat
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  lineHeight: 1.9,
                }}
              >
                {project.result}
              </Typography>
            </CardContent>
          </Card>

          {/* Responsabilités */}

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Responsabilités
          </Typography>

          <Stack spacing={2} sx={{ mb: 4 }}>
            {project.responsibilities.map((item) => (
              <Card
                key={item}
                sx={{
                  bgcolor: 'rgba(255,255,255,.03)',
                }}
              >
                <CardContent>
                  <Typography>✓ {item}</Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>

          {/* Technologies */}

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Technologies
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{
              flexWrap: 'wrap',
              mb: 4,
            }}
          >
            {project.technologies.map((tech) => (
              <Chip key={tech} label={tech} color="warning" variant="outlined" />
            ))}
          </Stack>

          {/* Captures */}

          {project.screenshots.length > 0 && (
            <>
              <Divider sx={{ mb: 3 }} />

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Captures
              </Typography>

              <ImageList cols={1} gap={16}>
                {project.screenshots.map((image, index) => (
                  <ImageListItem key={index}>
                    <Box
                      component="img"
                      src={image}
                      alt={project.title}
                      sx={{
                        width: '100%',
                        borderRadius: 3,
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </>
          )}
        </Box>
      </Box>
    </Drawer>
  );
}
