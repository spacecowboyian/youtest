import { Search } from "@carbon/react";
import './SearchArea.scss';

interface SearchAreaProps {
  onChange: (e: { target: HTMLInputElement; type: "change"; }) => void;
  isWaiting: boolean;
}

const SearchArea: React.FC<SearchAreaProps> = ({ isWaiting, onChange }) => {
  return (
    <Search size="lg" autoFocus className={isWaiting ? 'waiting-input' : ''} onChange={onChange} labelText="Search Stack Overflow" />
  )
}

export default SearchArea;