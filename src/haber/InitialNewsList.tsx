import { Skeleton } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { useMatch } from '@tanstack/react-location';
import NewsList from './NewsList';

function InitialNewsList() {
  const {
    data: { news },
    isLoading,
  } = useMatch();
  const { height } = useViewportSize();
  const values = [...Array(20).keys()];

  if (isLoading) {
    return (
      <>
        {values.map((val) => (
          <Skeleton
            key={val}
            height={height / values.length}
            mt={6}
            width='100%'
            radius='xl'
          />
        ))}
      </>
    );
  }

  return <NewsList news={news} />;
}

export default InitialNewsList;
