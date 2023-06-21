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

  const handleSearch = term => {
    setSearchQuery(term);
  };

  return {data, handleSearch};
};

export default useSearch;