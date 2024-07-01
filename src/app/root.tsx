import { Outlet } from "react-router-dom";
import { Box, Container } from '@radix-ui/themes';
import classes from './root.module.css';

export const AppRoot = () => {
  return (
    <Box className={classes.background}>
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};