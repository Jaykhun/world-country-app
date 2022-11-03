import React, {useEffect, useState} from 'react';
import key from "react-key-string";
import {useDispatch, useSelector} from "react-redux";
import {countryState, ICountry} from "../../store/types/stateTypes";
import {fetchCountryRequest} from "../../store/actions/actions";
import CountryItem from "../CountryItem";

const Home = () => {
    const {loading, error, countries, isDark} = useSelector((state: countryState) => state.country)
    const [value, setValue] = useState('')
    const [region, setRegion] = useState('')
    const dispatch = useDispatch()

    const onSearch = (e: any) => {
        setValue(e.target.value)
    }

    const filteredCountry = countries.filter(item => item.name.common.toLowerCase().includes(value.toLowerCase()))

    const onSelect = (e: any) => {
        setRegion(e.target.value)
        countries.filter(item => item.region.toLowerCase().includes(region.toLowerCase()))
    }

    useEffect(() => {
        dispatch(fetchCountryRequest())
    }, [])

    return (
        <div className={`container ${isDark ? 'dark' : ''}`}>
            <div className="wrapper-actions">
                <input type="text" placeholder="Search" value={value} onChange={onSearch}/>
                <select onChange={onSelect} value={region}>
                    <option>All</option>
                    <option>America</option>
                    <option>Europe</option>
                    <option>Africa</option>
                    <option>Asia</option>
                </select>
            </div>

            <div className="country">
                {loading
                    ? (<p>loading</p>)
                    : error
                        ? (<p>error</p>)
                        : filteredCountry.length > 0
                            ? filteredCountry.map((item: ICountry) =>
                                <CountryItem country={item} key={key.generate()}/>)
                            : <p>Nothing was found</p>
                }
            </div>
        </div>

    );
};

export default Home;