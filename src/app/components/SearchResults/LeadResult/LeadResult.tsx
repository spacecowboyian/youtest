import { StackOverflowResult } from "@/app/types/StackOverflowResult";
import { ClickableTile, Tag, Tile } from "@carbon/react";
import { decode } from 'html-entities';
import { useEffect, useState } from "react";

import "./LeadResult.scss";

interface LeadResultProps {
  item: StackOverflowResult;
  countdown: number;
}

const LeadResult: React.FC<LeadResultProps> = ({ countdown, item, ...props }) => {

  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random());
  }, [item]);

  return (
    item ?
      item.title !== "noresult" ?
        <ClickableTile key={key} id="lead-result" href={item.link} >
          <span className="tile-label">Top Result</span>
          <h3 className="lead-result-title">{decode(item.title)}</h3>
          Tags: &nbsp;
          {item.tags ? item.tags.map(tag => (
            <Tag key={tag} className="some-class" type="cyan" title="tag">
              {tag}
            </Tag>
          ))
            : null}
        </ClickableTile>
        : <Tile><p>Nope. Try again friend.</p></Tile>
      : <Tile><p className="center">Start typing your code quandry and when you are done typing, you shall receive the best single stack overflow result I can provide</p></Tile>
  )
}

export default LeadResult;

