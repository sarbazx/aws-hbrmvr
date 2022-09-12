import { Container, Skeleton } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { useQuery } from '@tanstack/react-query';
import { fetchInitialNews } from '../api/api';
import NewsList from './NewsList';

function InitialNewsList() {
  const { isLoading, data } = useQuery(['initialNews'], fetchInitialNews);
  const { height } = useViewportSize();
  const values = [...Array(20).keys()];
  if (isLoading) {
    return (
      <Container>
        {values.map((val) => (
          <Skeleton
            key={val}
            height={height / values.length}
            mt={6}
            width='100%'
            radius='xl'
          />
        ))}
      </Container>
    );
  }
  return <NewsList news={data} />;
}

export default InitialNewsList;
