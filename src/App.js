import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/pages/Home";
import {About} from "./components/pages/About";
import {Error} from "./components/pages/Error";
import {HeaderLayout} from "./components/layout/HeaderLayout";
import {FooterLayout} from "./components/layout/FooterLayout";
import ContactPage from "./components/pages/ContantPage";
import DataPage from "./components/pages/DataPage";
import FirstProjectPage from "./components/pages/FirstProjectPage";
import SecondProject from "./components/pages/SecondProject";
import ThirdProject from "./components/pages/ThirdProject";


export const App = () => {

    return (<BrowserRouter>
        <HeaderLayout/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/fetch' element={<DataPage/>}/>
            <Route path='/firstProject' element={<FirstProjectPage/>}/>
            <Route path='/secondProject' element={<SecondProject/>}/>
            <Route path='/thirdProject' element={<ThirdProject/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
        <FooterLayout/>
    </BrowserRouter>);
}