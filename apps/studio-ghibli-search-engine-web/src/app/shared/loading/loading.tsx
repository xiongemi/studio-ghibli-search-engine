import { Box, CircularProgress } from '@mui/material';

export function Loading() {
  return (
    <Box component="div" sx={{ textAlign: 'center' }}>
      <CircularProgress />
    </Box>
  );
}

export default Loading;
