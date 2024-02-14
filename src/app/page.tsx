'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import SearchResults from './components/SearchResults/SearchResults';
import './page.scss';
import useSearchResults from './services/useSearchResults';

import { Content, Theme } from '@carbon/react';
import SearchArea from './components/SearchArea/SearchArea';

const SearchInterface = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const { searchResultsItems, fetchSearchResults } = useSearchResults(searchTerm);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    setCountdown(3);
    const interval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 500);

    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.length > 1) {
        fetchSearchResults();
      }
    }, 1500)

    return () => {
      clearTimeout(delayDebounceFn);
      clearInterval(interval);
    }
  }, [searchTerm, fetchSearchResults]);

  const handleSearchChange = (event: { target: HTMLInputElement; type: "change"; }) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    router.push(`/?search=${newSearchTerm}`);
  }

  return (
    <Theme as="main" theme={"g100"}>
      <SearchArea searchTerm={searchTerm} isWaiting={countdown === 1 && searchTerm.length > 1} onChange={handleSearchChange} />
      <Content>
        <SearchResults countdown={countdown} items={searchResultsItems} />
      </Content>
    </Theme>
  );
}

export default function Home() {
  return (
    <Suspense fallback="Loading...">
      <SearchInterface />
    </Suspense>
  );
}
