import './App.css';

import { Box, Button, Text } from '@chakra-ui/react'; // Импорт компонентов Chakra
import { useState } from 'react';

import { useGetPostsQuery } from '~/query/services/posts.ts';

import AppContainer from '../components/AppContainer';
import Header from '../components/Header'; // Импорт Header

function App() {
    const [count, setCount] = useState(0);
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <>
            <Header /> {/* Вставка компонента Header */}
            <AppContainer>
                {/* Обёртка из Chakra */}

                <Box mt={4}>
                    <Button colorScheme='teal' onClick={() => setCount((count) => count + 1)}>
                        Count is {count}
                    </Button>
                </Box>
                <Text mt={4} fontSize='lg'>
                    Edit <code>src/App.tsx</code> and save to test HMR.
                </Text>
                <Text mt={2} fontSize='sm' color='gray.500'>
                    Click on the Vite and React logos to learn more.
                </Text>
            </AppContainer>
        </>
    );
}

export default App;
