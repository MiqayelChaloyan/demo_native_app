import {useState, useEffect} from 'react';

const useSearch = (state, searchKey) => {
  const [data, setData] = useState(state);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!searchQuery || searchQuery.trim() === '') {
      setData(state);
      return;
    }

    const filteredData = state.filter(item =>
      item[searchKey].toLowerCase().includes(searchQuery.toLowerCase()),
    );

    setData(filteredData);
  }, [searchQuery, state, searchKey]);

  const handleSearch = term => {
    setSearchQuery(term);
  };

  return {data, handleSearch};
};

export default useSearch;