import { Container } from '@mantine/core';
import NewsListItem from './NewsListItem';
const NewsList = ({ news }: any) => {
  return (
    <Container size='lg' px='md'>
      {news.map((item: any) => (
        <NewsListItem key={item.id} news={item} />
      ))}
    </Container>
  );
};

export default NewsList;
