import { StackOverflowResult } from '@/app/types/StackOverflowResult';
import { Link, ListItem, UnorderedList } from "@carbon/react";
import { decode } from 'html-entities';

interface RelatedResultsListProps {
  items: StackOverflowResult[];
}

const RelatedResultsList: React.FC<RelatedResultsListProps> = ({ items }) => {
  return (
    <UnorderedList>
      {items ? items.map(item => (
        <ListItem key={item.question_id}>
          <Link href={item.link}>{decode(item.title)}</Link>
        </ListItem>
      ))
        : null}
    </UnorderedList>
  )
}

export default RelatedResultsList