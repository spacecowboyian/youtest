import { Search } from "@carbon/react";
import { decode } from 'html-entities';
import { useEffect, useRef } from "react";
import './SearchArea.scss';


interface SearchAreaProps {
  onChange: (e: { target: HTMLInputElement; type: "change"; }) => void;
  isWaiting: boolean;
  searchTerm: string;
}

const SearchArea: React.FC<SearchAreaProps> = ({ isWaiting, onChange, searchTerm }) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (isMobile && searchRef.current && !isWaiting && searchTerm !== '') {
      searchRef.current.blur();
    }
  }, [isWaiting]);

  return (
    <Search value={decode(searchTerm)} size="lg" ref={searchRef} autoFocus className={isWaiting ? 'waiting-input' : ''} onChange={onChange} labelText="Search Stack Overflow" />
  )
}

export default SearchArea;