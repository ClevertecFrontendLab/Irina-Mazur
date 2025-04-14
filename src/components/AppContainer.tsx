import { Box } from '@chakra-ui/react';

const AppContainer = ({ children }: { children: React.ReactNode }) => (
    <Box maxW='1920px' w='100%' mx='auto' px={4} bg='white'>
        {children}
    </Box>
);

export default AppContainer;
