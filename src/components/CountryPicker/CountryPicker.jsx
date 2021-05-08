import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCountriesName } from '../../api/index';
import { actions } from '../../redux/Summary/actions';

import styles from './CountryPicker.module.css';

const CountryPicker = () => {

    const dispatch = useDispatch();
    const {country} = useSelector(state => state.summaryReducer);

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function getData() {
            const fetchedData = await getCountriesName();
            setCountries(fetchedData);
        }

        getData();
    }, [])

    const handleChange = (e) => {
        dispatch(actions.changeCountry(e.target.value))
    }
    return (
        <div>
            <select 
                name="countries" 
                id="countries" 
                value={country} 
                onChange={handleChange}
                className={styles.countrySelect}
            >
                <option value='global'>Global</option>
                {
                    countries.length > 0 ? countries.map((country, index) => {
                        return (
                            <option key={index} value={country.slug}>{country.name}</option>
                        )
                    })
                    :
                    <option value='null'>NUll</option>
                }
            </select>
        </div>
        
    )
}

export default CountryPicker;