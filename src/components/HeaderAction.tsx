import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {countryState} from "../store/types/stateTypes";

const HeaderAction = () => {
    const {countries} = useSelector((state: countryState) => state.country)

    const [value, setValue] = useState('')

    const onSearch = (e: any) => {
        setValue(e.target.value)
        const findCountry = countries.filter(item => item.name.common.toLowerCase().includes(e.target.value))
    }

    return (
        <div className="container">
            <div className="wrapper-actions">
                <input type="text" placeholder="Search" value={value} onChange={onSearch}/>
                <select>
                    <option>All</option>
                    <option>America</option>
                    <option>Europe</option>
                    <option>Africa</option>
                    <option>Asia</option>
                </select>
            </div>
        </div>
    );
};

export default HeaderAction;