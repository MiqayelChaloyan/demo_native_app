import {useEffect} from 'react';
const useDataForUpdate = (data, setData, error) => {
  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data, setData]);
  useEffect(() => {
    if (error) {
      console.error('Error fetching users data:', error);
    }
  }, [data, error]);
};

export default useDataForUpdate;
