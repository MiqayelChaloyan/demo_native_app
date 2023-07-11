import {useState, useEffect} from 'react';

const useSearch = (initialData, searchKey) => {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!searchQuery || searchQuery.trim() === '') {
      setData(initialData);
      return;
    }

    const filteredData = initialData.filter(item =>
      item[searchKey].toLowerCase().includes(searchQuery.toLowerCase()),
    );

    setData(filteredData);
  }, [searchQuery, initialData, searchKey]);

  const handleSearch = query => {
    setSearchQuery(query);
  };

  return {data, handleSearch};
};

export default useSearch;


// The useSearch hook takes two parameters: initialData, which represents the 
// initial data to be searched, and searchKey, which specifies the key in 
// the data object to perform the search on.

// Inside the hook, it initializes two state variables using the useState hook: data and searchQuery. 
// data holds the filtered data based on the search query, and searchQuery holds the current search query.

// The hook uses the useEffect hook to perform the search whenever the searchQuery, initialData, 
// or searchKey dependencies change. If the searchQuery is empty or only contains whitespace, 
// it resets the data to the initialData. Otherwise, it filters the initialData based on the 
// searchKey and updates the data state with the filtered results.

// This custom useSearch hook can be used in a functional component to enable search 
// functionality on a given data set, providing a convenient way to filter and 
// retrieve the filtered data based on a search query.