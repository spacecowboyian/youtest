'use client'
import { useSearchParams } from 'next/navigation';
import { Suspense, useCallback, useEffect, useState } from 'react';

import SearchResults from './components/SearchResults/SearchResults';
import './page.scss';
import useSearchResults from './services/useSearchResults';

import { Content, Theme } from '@carbon/react';
import debounce from 'lodash/debounce';
import SearchArea from './components/SearchArea/SearchArea';

const SearchInterface = () => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  const { searchResultsItems, fetchSearchResults } = useSearchResults(searchTerm);
  const [isDoneTyping, setIsDoneTyping] = useState(true);


  const debouncedSearch = useCallback(
    debounce((newSearchTerm: string) => {
      setIsDoneTyping(true);
      setTimeout(async () => {
        setIsDoneTyping(false);
        await fetchSearchResults(newSearchTerm);
      }, 2000);
    }, 1000),
    [fetchSearchResults]
  );

  useEffect(() => {
    setIsDoneTyping(false);
    debouncedSearch(searchTerm);

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm]);

  const handleSearchChange = useCallback(
    (event: { target: HTMLInputElement; type: 'change' }) => {
      const newSearchTerm = event.target.value;
      setSearchTerm(newSearchTerm);
    },
    [setSearchTerm]
  );

  return (
    <Theme as="main" theme={'g100'}>
      <SearchArea
        searchTerm={searchTerm}
        isWaiting={isDoneTyping && searchTerm.length > 1}
        onChange={handleSearchChange}
      />
      <Content>
        <SearchResults items={searchResultsItems} />
      </Content>
    </Theme>
  );
};

export default function Home() {
  return (
    <Suspense fallback="Loading...">
      <SearchInterface />
    </Suspense>
  );
}
