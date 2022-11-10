import {Link, useParams} from "react-router-dom";
import key from "react-key-string";
import {useSelector} from "react-redux";
import {countryState, ICountry, initialState} from "../../store/types/stateTypes";

const CountryInfo = () => {
    const {countries, isDark} = useSelector<countryState, initialState>(state => state.country)
    const param = useParams()
    const code: any = param.id
    const countryInfo: ICountry | any = countries.find(item =>
        item.cca3.toLowerCase().includes(code?.toLowerCase())
        || item.name.common.toLowerCase().includes(code?.toLowerCase()))
    const {name, population, capital, region, flags, borders} = countryInfo

    return (
        <>
            <div className={`container countryInfo ${isDark ? 'dark' : ''}`}>
                <Link className="back-btn" to="/">Back</Link>
                <div className="countryInfo__body">
                    <div className="countryInfo__img">
                        <img src={flags.png} alt={name.common}/>
                    </div>
                    <div className="countryInfo__content">
                        <p>Name: <span>{name.common}</span></p>
                        <p>Capital: <span>{capital}</span></p>
                        <p>Population: <span>{population}</span></p>
                        <p>Region: <span>{region}</span></p>

                        <div className="countryInfo__borders">
                            {borders
                                ? borders.map((item: string) =>
                                    <Link to={`/${item}`}
                                          key={key.generate()}>{item}
                                    </Link>)
                                : <p>Borders none</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountryInfo;