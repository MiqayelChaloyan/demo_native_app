export const getDataUsersFromFile = async () => {
    try {
        const jsonData = await require('../data/users.json');
        if (jsonData !== null) {
            return jsonData.users;
        } else {
            console.log('No data found in file.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const getDataFeedsFromFile = async () => {
    try {
        const jsonData = await require('../data/feeds.json');
        if (jsonData !== null) {
            return jsonData.feeds;
        } else {
            console.log('No data found in file.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const getDataMarketFromFile = async () => {
    try {
        const jsonData = await require('../data/market.json');
        if (jsonData !== null) {
            return jsonData.market;
        } else {
            console.log('No data found in file.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const getDataExpensesFromFile = async () => {
    try {
        const jsonData = await require('../data/expenses.json');
        if (jsonData !== null) {
            return jsonData.expenses;
        } else {
            console.log('No data found in file.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const getDataOptionsFromFile = async () => {
    try {
        const jsonData = await require('../data/options.json');
        if (jsonData !== null) {
            return jsonData.options;
        } else {
            console.log('No data found in file.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}