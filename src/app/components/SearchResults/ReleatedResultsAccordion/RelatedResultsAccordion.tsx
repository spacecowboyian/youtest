import { Accordion, AccordionItem } from "@carbon/react";
import RelatedResultsList from "../RelatedResultsList/RelatedResultsList";

interface RelatedResultsAccordionProps {
  items: any[];
}

const RelatedResultsAccordion: React.FC<RelatedResultsAccordionProps> = ({ items }) => {

  const ResultsAccordionItem = ({ accordionItems, label, open }: {
    accordionItems: any[]; label: string; open?: boolean
  }) => {
    if (accordionItems.length > 0) {
      return (
        <AccordionItem open={open} title={`${accordionItems.length} - ${label}`}>
          <RelatedResultsList items={accordionItems} />
        </AccordionItem>
      )
    }
  }

  return (
    items.length > 0 &&
    <Accordion>
      <ResultsAccordionItem open accordionItems={items.slice(1, 6)} label="Directly Related Results" />
      <ResultsAccordionItem accordionItems={items.slice(7, 22)} label="Kinda Related Results" />
      <ResultsAccordionItem accordionItems={items.slice(23)} label="is All That's Left" />
    </Accordion>
  )
}

export default RelatedResultsAccordion;