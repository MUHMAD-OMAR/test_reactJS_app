import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./components/pages/Home";
import {About} from "./components/pages/About";
import {Error} from "./components/pages/Error";
import {HeaderLayout} from "./components/layout/HeaderLayout";
import {FooterLayout} from "./components/layout/FooterLayout";
import { ConfigProvider } from 'antd';

export const App = () => {
  return (
      <ConfigProvider
    theme={{
        token: {
            // Seed Token
            colorPrimary: '#00b96b',
                borderRadius: 2,
                // Alias Token
                colorBgContainer: '#f6ffed',
        },
    }}>
          <BrowserRouter>
          <HeaderLayout />
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='*' element={<Error />} />
              </Routes>
          <FooterLayout />
          </BrowserRouter>
      </ConfigProvider>
  );
}