import React from 'react';
import {CountryItemProps} from "../store/types/propsTypes";

const CountryItem: React.FC<CountryItemProps> = ({country}) => {
    const {name, population, capital, region, flags} = country
    return (
        <div className="country-item">
            <div className="country-item__flag">
                <img src={flags.png} alt={name.common}/>
            </div>

            <div className="country-item__content">
                <p className="country-item__name">{name.common}</p>
                <p>Capital <span className="country-item__info">{capital}</span></p>
                <p>Population <span className="country-item__info">{population}</span></p>
                <p>Region <span className="country-item__info">{region}</span></p>
            </div>
        </div>
    );
};

export default CountryItem;