import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Skeleton,
  Slider,
  Stack,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer, SectionHeading } from '@shared/ui';

const TYPOGRAPHY_VARIANTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'overline',
] as const;

const showcaseCardSx = {
  height: '100%',
  p: { xs: 2.5, md: 3.5 },
};

export function ElementsShowcaseSection() {
  const { t } = useTranslation('elementsShowcase');
  const [tabValue, setTabValue] = useState(0);
  const [selectValue, setSelectValue] = useState('option1');
  const [sliderValue, setSliderValue] = useState(40);

  const onSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectValue(event.target.value);
  };

  return (
    <Box py={{ xs: 6, md: 8 }}>
      <PageContainer>
        <SectionHeading
          eyebrow={t('intro.eyebrow')}
          title={t('intro.title')}
          body={t('intro.body')}
          mb={{ xs: 4, md: 5 }}
        />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Paper sx={showcaseCardSx}>
            <Typography variant="h4" mb={2.5}>
              {t('sections.typography.title')}
            </Typography>
            <Stack spacing={1.5}>
              {TYPOGRAPHY_VARIANTS.map((variant) => (
                <Box key={variant}>
                  <Typography variant={variant}>{t(`typography.${variant}`)}</Typography>
                  <Typography color="text.secondary" variant="caption">
                    {variant}
                  </Typography>
                </Box>
              ))}
            </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Paper sx={showcaseCardSx}>
            <Typography variant="h4" mb={2.5}>
              {t('sections.buttons.title')}
            </Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={1.5}>
              <Button variant="contained">{t('buttons.primary')}</Button>
              <Button variant="outlined">{t('buttons.secondary')}</Button>
              <Button variant="text">{t('buttons.ghost')}</Button>
              <Button color="secondary" variant="contained">
                {t('buttons.accent')}
              </Button>
            </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 12, lg: 6 }}>
            <Paper sx={showcaseCardSx}>
            <Typography variant="h4" mb={2.5}>
              {t('sections.forms.title')}
            </Typography>
            <Stack spacing={2}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <TextField fullWidth label={t('forms.name')} placeholder={t('forms.namePlaceholder')} />
                <TextField
                  fullWidth
                  type="email"
                  label={t('forms.email')}
                  placeholder={t('forms.emailPlaceholder')}
                />
              </Stack>

              <FormControl fullWidth>
                <FormLabel sx={{ mb: 1 }}>{t('forms.selectLabel')}</FormLabel>
                <Select value={selectValue} onChange={onSelectChange}>
                  <MenuItem value="option1">{t('forms.option1')}</MenuItem>
                  <MenuItem value="option2">{t('forms.option2')}</MenuItem>
                  <MenuItem value="option3">{t('forms.option3')}</MenuItem>
                </Select>
              </FormControl>

              <Box>
                <FormLabel>{t('forms.sliderLabel')}</FormLabel>
                <Slider
                  value={sliderValue}
                  onChange={(_, value) => setSliderValue(value as number)}
                  valueLabelDisplay="auto"
                />
              </Box>

              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <FormControlLabel control={<Checkbox defaultChecked />} label={t('forms.checkbox')} />
                <FormControlLabel control={<Switch defaultChecked />} label={t('forms.switch')} />
              </Stack>

              <FormControl>
                <FormLabel>{t('forms.radioLabel')}</FormLabel>
                <RadioGroup row defaultValue="starter">
                  <FormControlLabel value="starter" control={<Radio />} label={t('forms.radioStarter')} />
                  <FormControlLabel value="pro" control={<Radio />} label={t('forms.radioPro')} />
                </RadioGroup>
              </FormControl>
            </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Paper sx={showcaseCardSx}>
            <Typography variant="h4" mb={2.5}>
              {t('sections.feedback.title')}
            </Typography>
            <Stack spacing={2}>
              <Alert severity="success">{t('feedback.success')}</Alert>
              <Alert severity="warning">{t('feedback.warning')}</Alert>
              <LinearProgress />
              <Stack direction="row" spacing={2}>
                <Skeleton variant="rounded" width={130} height={40} />
                <Skeleton variant="text" width={180} />
              </Stack>
            </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Paper sx={showcaseCardSx}>
            <Typography variant="h4" mb={2.5}>
              {t('sections.dataDisplay.title')}
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.25} flexWrap="wrap" useFlexGap>
                <Chip label={t('dataDisplay.chipDefault')} />
                <Chip color="primary" label={t('dataDisplay.chipPrimary')} />
                <Chip color="secondary" label={t('dataDisplay.chipSecondary')} />
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar>A</Avatar>
                <Badge badgeContent={3} color="primary">
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>B</Avatar>
                </Badge>
              </Stack>

              <Divider />

              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <CheckCircleRoundedIcon color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary={t('dataDisplay.list1Title')}
                    secondary={t('dataDisplay.list1Body')}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <CheckCircleRoundedIcon color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary={t('dataDisplay.list2Title')}
                    secondary={t('dataDisplay.list2Body')}
                  />
                </ListItem>
              </List>
            </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 12, lg: 6 }}>
            <Paper sx={showcaseCardSx}>
            <Typography variant="h4" mb={2.5}>
              {t('sections.navigationAndSurfaces.title')}
            </Typography>
            <Stack spacing={2.5}>
              <Tabs value={tabValue} onChange={(_, value) => setTabValue(value)} aria-label="elements tabs">
                <Tab label={t('navigationAndSurfaces.tabOne')} />
                <Tab label={t('navigationAndSurfaces.tabTwo')} />
                <Tab label={t('navigationAndSurfaces.tabThree')} />
              </Tabs>
              <Typography color="text.secondary">
                {tabValue === 0 && t('navigationAndSurfaces.tabOneContent')}
                {tabValue === 1 && t('navigationAndSurfaces.tabTwoContent')}
                {tabValue === 2 && t('navigationAndSurfaces.tabThreeContent')}
              </Typography>

              <Card sx={{ maxWidth: 520 }}>
                <CardContent>
                  <Typography variant="h6">{t('navigationAndSurfaces.cardTitle')}</Typography>
                  <Typography color="text.secondary" mt={1.25}>
                    {t('navigationAndSurfaces.cardBody')}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">{t('navigationAndSurfaces.cardAction1')}</Button>
                  <Button size="small" variant="outlined">
                    {t('navigationAndSurfaces.cardAction2')}
                  </Button>
                </CardActions>
              </Card>

              <Accordion defaultExpanded>
                <AccordionSummary>{t('navigationAndSurfaces.accordionTitle')}</AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    {t('navigationAndSurfaces.accordionBody')}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Stack>
            </Paper>
          </Grid>
        </Grid>
      </PageContainer>
    </Box>
  );
}
