import React from 'react';
import {CountryItemProps} from "../store/types/propsTypes";
import {Link} from "react-router-dom";

const CountryItem: React.FC<CountryItemProps> = ({country}) => {
    const {name, population, capital, region, flags} = country
    return (
        <Link to={country.name.common} className="country-item">
            <div className="country-item__flag">
                <img src={flags.png} alt={name.common}/>
            </div>

            <div className="country-item__content">
                <p className="country-item__name">{name.common}</p>
                <p>Capital <span className="country-item__info">{capital}</span></p>
                <p>Population <span className="country-item__info">{population}</span></p>
                <p>Region <span className="country-item__info">{region}</span></p>
            </div>
        </Link>
    );
};

export default CountryItem;