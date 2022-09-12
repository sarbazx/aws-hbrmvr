import { useQuery } from '@tanstack/react-query';
import { fetchRecommendedNews } from '../api/api';
import { Skeleton } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { Link } from '@tanstack/react-location';
import NewsListItem from './NewsListItem';

const RecommendedNews = ({ title, id }: any) => {
  const { isSuccess, data } = useQuery(
    [`news-${id}`],
    async () => await fetchRecommendedNews(title)
  );

  const { height } = useViewportSize();
  const values = [...Array(20).keys()];

  if (isSuccess) {
    return (
      <>
        {data.data.map((item: any) => (
          <Link
            key={item.col4_id}
            to={`/${item.col4_id}`}
            style={{
              fontWeight: 'bold',
              textDecoration: 'none',
            }}>
            <NewsListItem title={item.col4_title} />
          </Link>
        ))}
      </>
    );
  }

  return (
    <>
      {values.map((val) => (
        <Skeleton
          key={val}
          height={height / values.length}
          mt={6}
          p='lg'
          width='100%'
          radius='xl'
        />
      ))}
    </>
  );
};

export default RecommendedNews;
