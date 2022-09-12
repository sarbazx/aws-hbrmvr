import { Card, Group, Text } from '@mantine/core';
import { useMatch } from '@tanstack/react-location';
import RecommendedNews from './RecommendedNews';

const NewsView = () => {
  const {
    data: { news },
  } = useMatch();
  return (
    <>
      <Card shadow='sm' p='lg' radius='md' m='lg' withBorder>
        <Group position='apart' mt='md' mb='xs'>
          <Text weight={700} size='xl'>
            {news[0].title}
          </Text>
          <div>{news[0].content}</div>
        </Group>
      </Card>
      <Text weight={700} size='lg' p='lg'>
        Benzer haberler:
      </Text>
      <RecommendedNews title={news[0].title} id={news[0].id} />
    </>
  );
};

export default NewsView;
