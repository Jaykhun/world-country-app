import {Outlet} from "react-router-dom";
import Country from "./components/Country";
import HeaderAction from "./components/HeaderAction";
import Header from "./components/Header";
import {useState} from "react";

const App = () => {
    const [light, setLight] = useState(true)

    const handleLight = () => {
        setLight(!light)
    }

    return (
        <div className={`${light ? '' : 'dark'}`}>
            <Header light={light} setLight={handleLight}/>
            {/*<HeaderAction/>*/}
            <Country/>
            <Outlet/>
        </div>
    );
};

export default App;