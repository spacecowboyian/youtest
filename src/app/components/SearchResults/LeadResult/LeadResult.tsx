import { StackOverflowResult } from "@/app/types/StackOverflowResult";
import { ClickableTile, Tag, Tile } from "@carbon/react";
import { decode } from "html-entities";
import { useEffect, useState } from "react";

import "./LeadResult.scss";

interface LeadResultProps {
  item: StackOverflowResult;
}

const LeadResult: React.FC<LeadResultProps> = ({ item }) => {
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now());
  }, [item]);

  if (!item) {
    return (
      <Tile>
        <p className="center">
          Start typing your code quandry and when you are done typing, you shall
          receive the best single stack overflow result I can provide
        </p>
      </Tile>
    );
  }

  if (item.title === "noresult") {
    return null;
  }

  return (
    <ClickableTile key={key} id="lead-result" href={item.link}>
      <span className="tile-label">Top Result</span>
      <h3 className="lead-result-title">{decode(item.title)}</h3>
      Tags: &nbsp;
      {item.tags?.map((tag) => (
        <Tag key={tag} className="some-class" type="cyan" title="tag">
          {tag}
        </Tag>
      ))}
    </ClickableTile>
  );
};

export default LeadResult;