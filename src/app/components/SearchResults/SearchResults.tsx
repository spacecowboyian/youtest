import { StackOverflowResult } from '@/app/types/StackOverflowResult';
import { Column, FlexGrid, Row } from '@carbon/react';
import LeadResult from './LeadResult/LeadResult';
import RelatedResultsAccordion from './ReleatedResultsAccordion/RelatedResultsAccordion';

interface SearchResultsProps {
  items: StackOverflowResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ items }) => {
  if (!items?.length) return null;

  return (
    <FlexGrid>
      <Row>
        <Column lg={4} md={3} sm={2}>
          <LeadResult item={items[0]} />
        </Column>
      </Row>
      <Row>
        <Column lg={4} md={3} sm={2}>
          <RelatedResultsAccordion items={items} />
        </Column>
      </Row>
    </FlexGrid>
  );
}

export default SearchResults;