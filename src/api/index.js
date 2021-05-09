import axios from 'axios';

const url = 'https://api.covid19api.com';

const fetchDataSummary = async (country) => {
    try {
        const response = await axios.get(`${url}/summary`);
        const fetchedData = response.data;

        let modifiedData = {};

        if (country === 'global') {

            modifiedData = {
                totalConfirmed: fetchedData.Global.TotalConfirmed,
                totalRecovered: fetchedData.Global.TotalRecovered,
                totalDeaths: fetchedData.Global.TotalDeaths,
                newConfirmed: fetchedData.Global.NewConfirmed,
                newRecovered: fetchedData.Global.NewConfirmed,
                newDeaths: fetchedData.Global.NewConfirmed,
                lastUpdate: fetchedData.Global.Date
            }
        }
        else {
            const foundIndex = fetchedData.Countries.findIndex(element => element.Slug === country);

            modifiedData = foundIndex !== -1 ? {
                totalConfirmed: fetchedData.Countries[foundIndex].TotalConfirmed,
                totalRecovered: fetchedData.Countries[foundIndex].TotalRecovered,
                totalDeaths: fetchedData.Countries[foundIndex].TotalDeaths,
                newConfirmed: fetchedData.Countries[foundIndex].NewConfirmed,
                newRecovered: fetchedData.Countries[foundIndex].NewConfirmed,
                newDeaths: fetchedData.Countries[foundIndex].NewConfirmed,
                lastUpdate: fetchedData.Countries[foundIndex].Date
            } : null
        }

        return modifiedData;
    }
    catch (err) {
        console.log(err);
        return;
    }
}

const fetchDailyDataGlobal = async (from, to) => {
    try {
        const response = await axios.get(`${url}/world?from=${from}&to=${to}`);

        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}

const fetchDailyDataCountry = async (from, to, country) => {
    try {
        const response = await axios.get(`${url}/country/${country}?from=${from}&to=${to}`);

        return response.data;
    }
    catch (err) {
        console.log(err);
    }
}

const getCountriesName = async () => {
    try {
        const response = await axios.get(`${url}/countries`)
        const fetchedData = response.data;

        const modifiedData = fetchedData.map((country) => {
            return {
                name: country.Country,
                slug: country.Slug
            }
        })

        return modifiedData;
    }
    catch (err) {
        console.log(err);
    }
}

export {
    fetchDataSummary,
    getCountriesName,
    fetchDailyDataGlobal,
    fetchDailyDataCountry
}