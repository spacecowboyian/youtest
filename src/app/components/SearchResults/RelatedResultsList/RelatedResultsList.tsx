import { StackOverflowResult } from '@/app/types/StackOverflowResult';
import { ListItem, UnorderedList } from "@carbon/react";
import { decode } from 'html-entities';

interface RelatedResultsListProps {
  items: StackOverflowResult[];
}

const RelatedResultsList: React.FC<RelatedResultsListProps> = ({ items }) => {
  return (
    <UnorderedList>
      {items ? items.map(item => (
        <ListItem key={item.question_id}>
          <a href={item.link}>{decode(item.title)}</a>
        </ListItem>
      ))
        : null}
    </UnorderedList>
  )
}

export default RelatedResultsList