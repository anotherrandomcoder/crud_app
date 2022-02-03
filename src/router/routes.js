import About from "../pages/About";
import Posts from "../pages/Posts";
import WrongPage from "../pages/WrongPage";
import Login from "../pages/Login";

export const privateRoutes=[ // для авторизированного пользователя
    {path: '/about', element: <About/>, exact: true},
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/', element: <Posts/>, exact: true}, //роутинг по базовой ссылке
    {path: '*', element: <WrongPage/>, exact: false } //роутинг по отсутствующей ссылке
]
export const publicRoutes=[ // для не авторизированного пользователя
    {path: '/login', element: <Login/>, exact: true},
    {path: '/', element: <Login/>, exact: true}, //роутинг по базовой ссылке
    {path: '*', element: <Login/>, exact: false } //роутинг по отсутствующей ссылке
]