import { Outlet } from "react-router-dom";
import { Box, Container } from '@radix-ui/themes';

export const AppRoot = () => {
  return (
    <Box>
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};