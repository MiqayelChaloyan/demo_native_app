export const getDataFromFile = (fileName) => {
  let jsonData;
  try {
      switch (fileName) {
        case 'users':
           jsonData = require('../data/users.json');
          return jsonData.users;
        case 'feeds':
           jsonData = require('../data/feeds.json');
          return jsonData.feeds;
        case 'market':
           jsonData = require('../data/market.json');
          return jsonData.market;
        case 'expenses':
           jsonData = require('../data/expenses.json');
          return jsonData.expenses;
        case 'options':
           jsonData = require('../data/options.json');
          return jsonData.options;
        default:
          console.log('Invalid file name:', fileName);
          break;
      }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
