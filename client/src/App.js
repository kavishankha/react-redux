import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Routers from "./component/routes";


const App = () => {
    return (
        <BrowserRouter>
            <Routers/>
        </BrowserRouter>
    );
};

export default App;
