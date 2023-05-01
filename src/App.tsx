import { QueryClientProvider } from 'react-query';

import { DataProvider } from './context/data';
import { ThemeProvider } from './context/theme';
import { queryClient } from '../api/config';
import { OpenAPI } from '../api';
import Home from './page/Home';

function App() {
  OpenAPI.BASE = import.meta.env.VITE_PUBLIC_API_URL || '';

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <DataProvider>
          <Home />
        </DataProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
