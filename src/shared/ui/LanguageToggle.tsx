import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useLanguage } from '@app/providers';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <ToggleButtonGroup
      size="small"
      exclusive
      value={language}
      onChange={(_, nextLanguage: 'en' | 'ru' | null) => {
        if (nextLanguage) {
          setLanguage(nextLanguage);
        }
      }}
      aria-label="language switcher"
    >
      <ToggleButton value="ru">RU</ToggleButton>
      <ToggleButton value="en">EN</ToggleButton>
    </ToggleButtonGroup>
  );
}
