import {
  AppShell,
  Container,
  Header,
  MantineProvider,
  Text,
} from '@mantine/core';
import { Link, Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { fetchInitialNews, fetchNewsById } from './api/api';
import InitialNewsList from './haber/InitialNewsList';
import NewsView from './haber/NewsView';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

export const routes = [
  {
    path: '/',
    element: <InitialNewsList />,
    loader: async () => ({
      news: await fetchInitialNews(),
    }),
  },
  {
    path: '/:id',
    element: <NewsView />,
    loader: async ({ params: { id } }: any) => ({
      news: await fetchNewsById(id),
    }),
  },
];

const location = new ReactLocation();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router location={location} routes={routes}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme: 'dark' }}>
          <Container size='lg' px='md'>
            <AppShell
              padding='md'
              header={
                <Header height={80} p='xl'>
                  <Container
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '100%',
                    }}>
                    <Link
                      to='/'
                      style={{
                        fontWeight: 'bold',
                        textDecoration: 'none',
                      }}>
                      <Text
                        size='xl'
                        style={{
                          fontSize: '30px',
                          color: 'white',
                        }}>
                        HaberimVar
                      </Text>
                    </Link>
                  </Container>
                </Header>
              }
              styles={(theme) => ({
                main: {
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.dark[8]
                      : theme.colors.gray[0],
                },
              })}>
              <Outlet />
            </AppShell>
          </Container>
        </MantineProvider>
      </Router>
    </QueryClientProvider>
  );
}

function getActiveProps() {
  return {
    style: {
      fontWeight: 'bold',
      textDecoration: 'none',
    },
  };
}
