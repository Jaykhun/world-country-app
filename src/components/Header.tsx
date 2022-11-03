import {useDispatch, useSelector} from "react-redux";
import {countryState} from "../store/types/stateTypes";
import {darkMode} from "../store/actions/actions";

const Header = () => {
    const {isDark} = useSelector((state: countryState) => state.country)
    const dispatch = useDispatch()

    const changeTheme = () => {
        dispatch(darkMode({isDark: !isDark}))
    }

    return (
        <>
            <div className="wrapper__header">
                <div className={`container ${isDark ? 'dark' : ''}`}>
                <span className="wrapper__theme" onClick={changeTheme}>
                    {isDark
                        ? <><i className="fa-regular fa-moon"></i>Dark</>
                        : <><i className="fa-regular fa-sun"></i>Light</>
                    }
                </span>
                </div>
            </div>
        </>
    );
};

export default Header;