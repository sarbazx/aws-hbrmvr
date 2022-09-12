import { MantineProvider, Text } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import InitialNewsList from './haber/InitialNewsList';
const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: 'dark' }}>
      <QueryClientProvider client={queryClient}>
        <InitialNewsList />
      </QueryClientProvider>
    </MantineProvider>
  );
}
