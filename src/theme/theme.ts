import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#3B82F6', // Bleu
      light: '#60A5FA',
      dark: '#2563EB',
    },

    secondary: {
      main: '#8B5CF6', // Violet
      light: '#A78BFA',
      dark: '#7C3AED',
    },

    background: {
      default: '#0B1120',
      paper: '#111827',
    },

    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },

    divider: '#1E293B',

    success: {
      main: '#22C55E',
    },

    warning: {
      main: '#F59E0B',
    },

    error: {
      main: '#EF4444',
    },
  },

  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'sans-serif',
    ].join(','),

    h1: {
      fontWeight: 800,
      letterSpacing: '-0.04em',
    },

    h2: {
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },

    h3: {
      fontWeight: 700,
    },

    h4: {
      fontWeight: 600,
    },

    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 18,
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(255,255,255,0.06)',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          background: '#111827',
          transition: 'all .3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(59,130,246,.15)',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: 12,
          paddingInline: 24,
          paddingBlock: 10,
          fontWeight: 700,
        },

        outlined: {
          borderColor: '#334155',
        },
      },
    },
  },
});
