import React, {useEffect, useState} from 'react';
import key from "react-key-string"
import {Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {countryState} from "./store/types/stateTypes";
import {fetchCountryRequest} from "./store/actions/countryFetchAction";
import CountryItem from "./components/CountryItem";
import {ICountry} from "./store/types/stateTypes";

const App = () => {
    const [light, setLight] = useState(false)
    const {loading, error, countries} = useSelector((state: countryState) => state.country)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCountryRequest())
    }, [])

    const handleLight = () => {
        setLight(!light)
    }

    return (
        <div className={`wrapper ${light ? '' : 'dark'}`}>

            <div className="wrapper__header">
                <div className="container">
                <span onClick={handleLight} className="wrapper__theme">
                    {light
                        ? <><i className="fa-regular fa-sun"></i>Light</>
                        : <><i className="fa-regular fa-moon"></i> Dark</>
                    }
                </span>
                </div>
            </div>

            <div className="container">
                <div className="country">
                    {loading
                        ? (<p>loading</p>)
                        : error
                            ? (<p>error</p>)
                            : countries.map((item: ICountry) =>
                                <CountryItem country={item} key={key.generate()}/>)
                    }
                </div>
                <Outlet/>
            </div>
        </div>
    );
};

export default App;