import React from 'react';
import { Route, Routes} from 'react-router-dom';
import AddName from './addName';
import ViewName from './viewName';
import Home from './home'
import UpdateName from "./updateName";
function Routers() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddName />} />
                <Route path="/view" element={<ViewName />} />
                <Route path="/update/:id" element={<UpdateName />} />
            </Routes>
        </div>
    );
}

export default Routers;
