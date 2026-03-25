import { Box, CircularProgress } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useUser } from '@app/providers';
import { Footer } from '@widgets/footer';
import { Header } from '@widgets/header';

export function AppLayout() {
  const { isReady } = useUser();

  if (!isReady) {
    return (
      <Box
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Header />
      <Box component="main" flex={1}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
