import { useState, createContext, useContext } from 'react';
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ConfigProvider, Layout, Menu, theme, Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import fr_CA from 'antd/locale/fr_CA';
import en_US from 'antd/locale/en_US';
import Navbar from './components/Navbar';
import Footbar from './components/Footbar';
import Home from './components/pages/Home';
import Discover from './components/pages/Discover';
import Feed from './components/pages/Feed';
import Share from './components/pages/Share';
import About from './components/pages/About'

const { Header, Content, Footer } = Layout;
const { Option } = Select;

// Change the language - need to use a context across the app
export const LangContext = createContext(null); // This will work with window.LNG

function BasicLayout() {

  const [lng, setLng] = useState(window.LNG);

  return (
    <LangContext.Provider value={{lng, setLng}}>
      <Layout>
        <Navbar />
        <Content style={{padding: '0',}} >
          <div style={{padding: 24,minHeight: '80vh',background: '#DEEBE9',borderRadius: 2,}}>
            <Outlet />
          </div>
        </Content>
        <Footbar />
      </Layout>
    </LangContext.Provider>
  )
}

export default function App() {
  return (
    <ConfigProvider theme={{token: {colorPrimary: '#00b96b', borderRadius: 2, colorBgContainer: '#deebe9',},}} locale={window.LNG == 'en_US' ? en_US : fr_CA } >
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<BasicLayout />}>
            <Route index element={<Home />}/>
            <Route path="discover" element={<Discover />} />
            <Route path="feed" element={<Feed />} />
            <Route path="share" element={<Share />} />
            <Route path="about" element={<About />} />
          </Route>
          {/* <Route path="/admin" element={<AdminLayout />}><Route index element={<Admin/>}/></Route> */}
        </Routes>
    </MemoryRouter>
  </ConfigProvider>
  );
}

