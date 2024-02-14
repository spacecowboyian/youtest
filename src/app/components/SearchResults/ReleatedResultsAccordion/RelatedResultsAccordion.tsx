import { Accordion, AccordionItem } from "@carbon/react";
import RelatedResultsList from "../RelatedResultsList/RelatedResultsList";

interface RelatedResultsAccordionProps {
  items: any[];
}

const RelatedResultsAccordion: React.FC<RelatedResultsAccordionProps> = ({ items }) => {
  return (
    items.length > 1 &&
    <Accordion>
      {items.slice(1, 6).length > 1 ?
        <AccordionItem open title={`${items.slice(1, 6).length} - Directly Related Results`}>
          <RelatedResultsList items={items.slice(1, 6)} />
        </AccordionItem>
        : null}
      {items.slice(7, 22).length > 1 ?
        <AccordionItem title={`${items.slice(7, 22).length} - Kinda Related Results`}>
          <RelatedResultsList items={items.slice(7, 22)} />
        </AccordionItem>
        : null}
      {items.slice(23).length > 1 ?
        <AccordionItem title={`${items.slice(23).length} - is All That's Left`}>
          <RelatedResultsList items={items.slice(23)} />
        </AccordionItem>
        : null}
    </Accordion>
  )
}

export default RelatedResultsAccordion;