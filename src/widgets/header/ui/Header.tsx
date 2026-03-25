import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useUser } from '@app/providers';
import { APP_ROUTES } from '@shared/lib/constants';
import { themeClassNames } from '@shared/theme';
import { LanguageToggle, PageContainer, ThemeModeToggle } from '@shared/ui';

type NavigationItem = {
  label: string;
  to: string;
};

export function Header() {
  const { t } = useTranslation('header');
  const { isAuthenticated, logout, user } = useUser();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navigationItems = useMemo<NavigationItem[]>(
    () => [
      { label: t('nav.home'), to: APP_ROUTES.home },
      { label: t('nav.elements'), to: APP_ROUTES.elements },
      { label: t('nav.backgrounds'), to: APP_ROUTES.backgrounds },
      { label: t('nav.capabilities'), to: '/#features' },
      { label: t('nav.contact'), to: '/#contact' },
    ],
    [t],
  );

  const authStatus = isAuthenticated && user ? user.name : t('user.guest');

  const authActions = (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.25} width={{ xs: '100%', md: 'auto' }}>
      {isAuthenticated && user ? (
        <>
          <Chip
            avatar={<Avatar>{user.name[0]}</Avatar>}
            color="primary"
            label={authStatus}
            title={t('user.signedInAs', { email: user.email })}
            variant="outlined"
          />
          <Button variant="outlined" color="inherit" onClick={logout} startIcon={<LogoutRoundedIcon />}>
            {t('actions.logout')}
          </Button>
        </>
      ) : (
        <>
          <Button component={RouterLink} to={APP_ROUTES.login} variant="text" color="inherit">
            {t('actions.login')}
          </Button>
          <Button component={RouterLink} to={APP_ROUTES.register} variant="contained">
            {t('actions.register')}
          </Button>
        </>
      )}
    </Stack>
  );

  const navigation = (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 0.5, md: 1 }}>
      {navigationItems.map((item) => (
        <Button
          key={item.to}
          component={RouterLink}
          to={item.to}
          color="inherit"
          onClick={() => setDrawerOpen(false)}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  );

  return (
    <AppBar
      position="sticky"
      color="transparent"
      // className={themeClassNames.background.appGlass}
      sx={{
        top: 0,
        py: 2,
        backgroundColor: 'transparent',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
      }}
    >
      <PageContainer sx={{ px: 0 }}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 76,
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              className={themeClassNames.radius.badge}
              sx={{
                width: 44,
                height: 44,
                display: 'grid',
                placeItems: 'center',
                background: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                fontWeight: 700,
              }}
            >
              N
            </Box>
            <Box>
              <Typography fontWeight={700}>{t('brand.name')}</Typography>
              <Typography color="text.secondary" variant="body2">
                {t('brand.tagline')}
              </Typography>
            </Box>
          </Stack>

          {isMobile ? (
            <Stack direction="row" spacing={0.75} alignItems="center">
              <ThemeModeToggle />
              <IconButton
                aria-label={t('menu')}
                color="inherit"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuRoundedIcon />
              </IconButton>
            </Stack>
          ) : (
            <>
              {navigation}
              <Stack direction="row" spacing={1.25} alignItems="center">
                <LanguageToggle />
                <ThemeModeToggle />
                {authActions}
              </Stack>
            </>
          )}
        </Toolbar>
      </PageContainer>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 'min(100%, 360px)',
            px: 2,
            py: 3,
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <Stack spacing={2.5}>
          <Box>
            <Typography fontWeight={700}>{t('brand.name')}</Typography>
            <Typography color="text.secondary" variant="body2">
              {location.pathname}
            </Typography>
          </Box>
          <Divider />
          {navigation}
          <Divider />
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <LanguageToggle />
            <ThemeModeToggle />
          </Stack>
          {authActions}
        </Stack>
      </Drawer>
    </AppBar>
  );
}
