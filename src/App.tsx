import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/pages/Layout";
import CountryInfo from "./components/pages/CountryInfo";
import Home from "./components/pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/:id" element={<CountryInfo/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;