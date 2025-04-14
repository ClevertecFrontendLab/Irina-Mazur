import './index.css';

import { ChakraProvider } from '@chakra-ui/react'; // Импорт ChakraProvider
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from '~/app/App.tsx';
import { store } from '~/store/configure-store.ts';

import theme from './theme'; // Импорт кастомной темы

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            {' '}
            {/* Обернуть приложение ChakraProvider */}
            <Provider store={store}>
                <App />
            </Provider>
        </ChakraProvider>
    </StrictMode>,
);
