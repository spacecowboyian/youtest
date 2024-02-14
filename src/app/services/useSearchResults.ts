import Axios from "axios";
import { useCallback, useState } from "react";

const useSearchResults = (searchTerm: string) => {
  const [searchResultsItems, setSearchResultsItems] = useState<any[]>([]);

  const fetchSearchResults = useCallback(() => {
    Axios.get(
      `https://api.stackexchange.com/2.3/search?order=desc&sort=relevance&site=stackoverflow&intitle=${searchTerm}`
    )
      .then((response) => {
        if (response.data.items.length > 0) {
          setSearchResultsItems(response.data.items);
        } else {
          setSearchResultsItems([{ title: "noresult" }]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchTerm]);

  return { searchResultsItems, fetchSearchResults };
};

export default useSearchResults;
