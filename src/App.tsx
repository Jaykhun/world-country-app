import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/pages/Layout";
import Info from "./components/pages/Info";
import Home from "./components/pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="country/:name.common" element={<Info/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;