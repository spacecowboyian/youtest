import { StackOverflowResult } from '@/app/types/StackOverflowResult';
import { Accordion, AccordionItem } from "@carbon/react";
import RelatedResultsList from "../RelatedResultsList/RelatedResultsList";

interface RelatedResultsAccordionProps {
  items: StackOverflowResult[];
}

const ResultsAccordionItem: React.FC<{ accordionItems: StackOverflowResult[], label: string, open?: boolean }> = ({ accordionItems, label, open }) => {
  if (accordionItems.length === 0) return null;

  return (
    <AccordionItem open={open} title={`${accordionItems.length} - ${label}`}>
      <RelatedResultsList items={accordionItems} />
    </AccordionItem>
  );
};

const RelatedResultsAccordion: React.FC<RelatedResultsAccordionProps> = ({ items }) => {
  if (!items?.length) return null;

  return (
    <Accordion>
      <ResultsAccordionItem open accordionItems={items.slice(1, 6)} label="Directly Related Results" />
      <ResultsAccordionItem accordionItems={items.slice(7, 22)} label="Kinda Related Results" />
      <ResultsAccordionItem accordionItems={items.slice(23)} label="is All That's Left" />
    </Accordion>
  );
};

export default RelatedResultsAccordion;