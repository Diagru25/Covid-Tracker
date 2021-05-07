import React, { useEffect, useState } from 'react';

import { getCountriesName } from '../../api/index';

import styles from './CountryPicker.module.css';

const CountryPicker = () => {
    const [countries, setCountries] = useState([]);
    const [valueSelected, setValueSelected] = useState('global');

    useEffect(() => {
        async function getData() {
            const fetchedData = await getCountriesName();
            setCountries(fetchedData);
        }

        getData();
    }, [])

    const handleChange = (e) => {
        setValueSelected(e.target.value);
    }
    return (
        <div>
            <select 
                name="countries" 
                id="countries" 
                value={valueSelected} 
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