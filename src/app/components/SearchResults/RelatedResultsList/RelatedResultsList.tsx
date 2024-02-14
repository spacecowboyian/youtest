import { StackOverflowResult } from '@/app/types/StackOverflowResult';
import { Link, ListItem, UnorderedList } from "@carbon/react";
import { decode } from 'html-entities';

interface RelatedResultsListProps {
  items: StackOverflowResult[];
}

const RelatedResultsList: React.FC<RelatedResultsListProps> = ({ items }) => {

  if (!items?.length) return null;

  return (
    <UnorderedList>
      {items.map(item => (
        <ListItem key={item.question_id}>
          <Link href={item.link}>{decode(item.title)}</Link>
        </ListItem>
      ))}
    </UnorderedList>
  )
}

export default RelatedResultsList