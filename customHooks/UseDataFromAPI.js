import {useState, useEffect, useContext} from 'react';
import {GlobalDataContext} from '../contexts/context';

const useDataFromAPI = keyword => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const {setFeeds} = useContext(GlobalDataContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let jsonData;
        switch (keyword) {
          case 'feeds':
            jsonData = require('../data/feeds.json').feeds;
            setFeeds(jsonData);
            break;
          case 'expenses':
            jsonData = require('../data/expenses.json').expenses;
            break;
          case 'options':
            jsonData = require('../data/options.json').options;
            break;
          case 'market':
            jsonData = require('../data/market.json').market;
            break;
          case 'users':
            jsonData = require('../data/users.json').users;
            break;
          default:
            setError('Invalid keyword: ' + keyword);
            return;
        }

        if (jsonData) {
          setData(jsonData);
        } else {
          console.log('No data found in file.');
        }
      } catch (err) {
        setError('Error fetching data: ' + err);
      }
    };

    fetchData();
  }, [keyword]);

  return {data, error};
};

export default useDataFromAPI;
