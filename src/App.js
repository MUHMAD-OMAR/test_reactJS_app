import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Error} from "./pages/Error";
import {HeaderLayout} from "./components/layout/HeaderLayout";
import {FooterLayout} from "./components/layout/FooterLayout";
import ContactPage from "./pages/ContantPage";
import DataPage from "./pages/DataPage";
import FirstProjectPage from "./pages/FirstProjectPage";
import SecondProject from "./pages/SecondProject";
import ThirdProject from "./pages/ThirdProject";
import SingleData from "./components/thirdProject/singleData";
import ReduxPage from "./pages/ReduxPage";


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
            <Route path='/thirdProject/:id' element={<SingleData/>}/>
            <Route path='/reduxPage' element={<ReduxPage/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
        <FooterLayout/>
    </BrowserRouter>);
}