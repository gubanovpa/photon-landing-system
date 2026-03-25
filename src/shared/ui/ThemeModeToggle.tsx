import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useThemeMode } from '@app/providers';

export function ThemeModeToggle() {
  const { mode, toggleMode } = useThemeMode();
  const { t } = useTranslation('common');
  const isDark = mode === 'dark';

  return (
    <Tooltip title={isDark ? t('theme.light') : t('theme.dark')}>
      <IconButton color="inherit" onClick={toggleMode} aria-label={isDark ? t('theme.light') : t('theme.dark')}>
        {isDark ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
      </IconButton>
    </Tooltip>
  );
}
