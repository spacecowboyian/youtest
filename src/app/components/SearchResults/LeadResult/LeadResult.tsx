import { StackOverflowResult } from "@/app/types/StackOverflowResult";
import { ClickableTile, Tag, Tile } from "@carbon/react";
import { decode } from "html-entities";
import { useEffect, useState } from "react";

import "./LeadResult.scss";

interface LeadResultProps {
  item: StackOverflowResult;
}

const LeadResult: React.FC<LeadResultProps> = ({ item, ...props }) => {
  const [key, setKey] = useState(new Date().getTime());

  useEffect(() => {
    setKey(new Date().getTime());
  }, [item]);

  let result;
  console.log(item);
  if (!item) {
    result = (
      <Tile>
        <p className="center">
          Start typing your code quandry and when you are done typing, you shall
          receive the best single stack overflow result I can provide
        </p>
      </Tile>
    );
  }
  if (item && item.title !== "noresult") {
    result = (
      <ClickableTile key={key} id="lead-result" href={item.link}>
        <span className="tile-label">Top Result</span>
        <h3 className="lead-result-title">{decode(item.title)}</h3>
        Tags: &nbsp;
        {item.tags
          ? item.tags.map((tag) => (
            <Tag key={tag} className="some-class" type="cyan" title="tag">
              {tag}
            </Tag>
          ))
          : null}
      </ClickableTile>
    );
  } else {
    result = (
      <Tile>
        <p>Nope. Try again friend.</p>
      </Tile>
    );
  }

  return result;
};

export default LeadResult;
