import React from 'react';
import {HeaderProps} from "../store/types/propsTypes";

const Header: React.FC<HeaderProps> = ({light, setLight}) => {
    const changeTheme = () => {
        setLight(!light)
    }

    return (
        <>
            <div className="wrapper__header">
                <div className="container">
                <span className="wrapper__theme" onClick={changeTheme}>
                    {light
                        ? <><i className="fa-regular fa-sun"></i>Light</>
                        : <><i className="fa-regular fa-moon"></i> Dark</>
                    }
                </span>
                </div>
            </div>
        </>
    );
};

export default Header;