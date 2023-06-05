export const getDataUsersFromFile = () => {
  try {
    const jsonData = require('../data/users.json');
    if (jsonData !== null) {
      return jsonData.users;
    } else {
      console.log('No data found in file.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getDataFeedsFromFile = () => {
  try {
    const jsonData = require('../data/feeds.json');
    if (jsonData !== null) {
      return jsonData.feeds;
    } else {
      console.log('No data found in file.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getDataMarketFromFile = () => {
  try {
    const jsonData = require('../data/market.json');
    if (jsonData !== null) {
      return jsonData.market;
    } else {
      console.log('No data found in file.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getDataExpensesFromFile = () => {
  try {
    const jsonData = require('../data/expenses.json');
    if (jsonData !== null) {
      return jsonData.expenses;
    } else {
      console.log('No data found in file.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getDataOptionsFromFile = () => {
  try {
    const jsonData = require('../data/options.json');
    if (jsonData !== null) {
      return jsonData.options;
    } else {
      console.log('No data found in file.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
