import { Link } from '@tanstack/react-location';
import NewsListItem from './NewsListItem';

const NewsList = ({ news }: any) => {
  return (
    <>
      {news.map((item: any) => (
        <Link
          key={item.id}
          to={item.id}
          style={{
            fontWeight: 'bold',
            textDecoration: 'none',
          }}>
          <NewsListItem title={item.title} />
        </Link>
      ))}
    </>
  );
};

export default NewsList;
