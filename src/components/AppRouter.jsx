import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path} element={route.element} path={route.path} exact={route.exact}/>
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.path} element={route.element} path={route.path} exact={route.exact}/>
                )}
            </Routes>
    );
};

export default AppRouter;