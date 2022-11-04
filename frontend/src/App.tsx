import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ScrollToTop from './components/ScrollToTop';
import { CartContextProvider } from './context/CartContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <GlobalStyle />
            <ScrollToTop />
            <Router />
          </BrowserRouter>
        </QueryClientProvider>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
