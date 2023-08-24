import {Routes, Route} from 'react-router-dom';
// import { Routes, Route } from 'react-router';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import NotFound from '../components/notFound/NotFound';

const AppRoutes = () => 
    <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/login/:404' exact element={<NotFound/>}/>
        <Route path='/:404' element={<NotFound/>}/>
    </Routes>

export default AppRoutes;

// When I use this routing system, then I face the issue when I run this website on Netlify Server
// Because, over pressing a button which redirects me to another route, appears like that page does not exist
// Though it is.
