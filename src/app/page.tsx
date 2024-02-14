'use client'
import Axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import SearchResults from './components/SearchResults/SearchResults';
import './page.scss';

import { Content, Theme } from '@carbon/react';
import SearchArea from './components/SearchArea/SearchArea';

// TODO: Add the search term to the URL so that the user can navigate back to the search results

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResultsItems, setSearchResultsItems] = useState<any[]>([]);
  const [countdown, setCountdown] = useState(3);

  const fetchSearchResults = useCallback(() => {
    Axios.get(`https://api.stackexchange.com/2.3/search?order=desc&sort=relevance&site=stackoverflow&intitle=${searchTerm}`)
      .then(response => {
        if (response.data.items.length > 0) {
          setSearchResultsItems(response.data.items);
        } else {
          setSearchResultsItems([{ title: 'noresult' }]);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [searchTerm]);

  useEffect(() => {
    setCountdown(3);
    const interval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 500);

    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.length > 1) {
        fetchSearchResults();
      }
    }, 1000)

    return () => {
      clearTimeout(delayDebounceFn);
      clearInterval(interval);
    }
  }, [searchTerm, fetchSearchResults]);

  const handleSearchChange = (event: { target: HTMLInputElement; type: "change"; }) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  }

  return (
    <Theme as="main" theme={"g100"}>
      <SearchArea isWaiting={countdown === 2 && searchTerm.length > 1} onChange={handleSearchChange} />
      <Content>
        <SearchResults countdown={countdown} items={searchResultsItems} />
      </Content>
    </Theme>
  );
}
