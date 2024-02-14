import { useCallback, useState } from "react";

const useSearchResults = (searchTerm: string) => {
  const [searchResultsItems, setSearchResultsItems] = useState<any[]>([]);

  const fetchSearchResults = useCallback(
    async (searchTerm: string) => {
      try {
        const response = await fetch(
          `https://api.stackexchange.com/2.3/search?order=desc&sort=relevance&site=stackoverflow&intitle=${encodeURIComponent(
            searchTerm
          )}}`
        );
        const data = await response.json();

        if (data.items.length > 0) {
          setSearchResultsItems(data.items);
        } else {
          setSearchResultsItems([{ title: "noresult" }]);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [searchTerm]
  );

  return { searchResultsItems, fetchSearchResults };
};

export default useSearchResults;
