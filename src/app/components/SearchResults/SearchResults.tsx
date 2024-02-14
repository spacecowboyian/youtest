import { StackOverflowResult } from '@/app/types/StackOverflowResult';
import { Column, FlexGrid, Row } from '@carbon/react';
import LeadResult from './LeadResult/LeadResult';
import RelatedResultsAccordion from './ReleatedResultsAccordion/RelatedResultsAccordion';

interface SearchResultsProps {
  items: StackOverflowResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ items }) => {
  return (
    <FlexGrid>
      <Row>
        <Column lg={4} md={3} sm={2}>
          <LeadResult item={items[0]} />
        </Column>
      </Row>
      <Row>
        <Column lg={4} md={3} sm={2}>
          {items.length > 0 && <RelatedResultsAccordion items={items} />}
        </Column>
      </Row>
    </FlexGrid>
  )
}

export default SearchResults;