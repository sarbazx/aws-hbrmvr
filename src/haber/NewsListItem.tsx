import { Badge, Card, Group, Text } from '@mantine/core';

const NewsListItem = ({ title }: any) => {
  return (
    <Card shadow='sm' p='lg' radius='md' m='lg' withBorder>
      <Group position='apart' mt='md' mb='xs'>
        <Text weight={700} size='md'>
          {title}
        </Text>
        <Badge color='blue' variant='light'>
          new
        </Badge>
      </Group>
    </Card>
  );
};

export default NewsListItem;
