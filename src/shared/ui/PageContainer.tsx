import { Container, styled } from '@mui/material';
import type { ContainerProps } from '@mui/material';

const StyledContainer = styled(Container)(({ theme }) => ({
  width: '100%',
  maxWidth: '1440px',
  paddingInline: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    paddingInline: theme.spacing(2),
  },
}));

export function PageContainer(props: ContainerProps) {
  return <StyledContainer maxWidth={false} {...props} />;
}
