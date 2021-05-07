import axios from 'axios';

const url = 'https://api.covid19api.com';

const fetchData = async () => {
    try {
        const response = await axios.get(`${url}/summary`);
        const fetchedData = response.data;

        const modifiedData = {
            confirmed: fetchedData.Global.TotalConfirmed,
            recovered: fetchedData.Global.TotalRecovered,
            deaths: fetchedData.Global.TotalDeaths,
            lastUpdate: fetchedData.Global.Date
        }

        return modifiedData;
    }
    catch (err) {
        console.log(err);
    }
}

const fetchDailyData = async (from, to) => {
    try {
        const response = await axios.get(`${url}/world?from=${from}&to=${to}`);

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
    fetchData,
    getCountriesName,
    fetchDailyData
}