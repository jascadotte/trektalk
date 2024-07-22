import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Button, Space} from 'antd';
import { TranslationOutlined } from '@ant-design/icons';
import { LangContext } from '../App';

const { Header } = Layout;

export default function Navbar() {
  const {lng, setLng} = useContext(LangContext);
  const S = window.STR[lng];

  // const [lang, setLang] = useState('en');

  const items = [
    {key: '1', label: <Link to='/discover'>{S.disc}</Link>},
    {key: '2', label: <Link to='/feed'>{S.feed}</Link>},
    {key: '3', label: <Link to='/share'>{S.share}</Link>},
    {key: '4', label: <Link to='/about'>{S.about}</Link>},
  ];
  
  function changeLang(){
    if (lng == 'fr_CA') {
      setLng('en_US');
    }
    else {
      setLng('fr_CA');
    }
  }

  return (
    <Header style={{position: 'sticky', top: 0, zIndex: 1, width: '100%', display: 'flex', alignItems: 'center', backgroundColor:'#deebe9', }}>
    <div><Link style={{ color: 'black', fontWeight:'bolder', fontSize: '1.4em', paddingRight: '10px'}} to='/'>Trek Talk</Link></div>
    <Menu mode="horizontal" defaultSelectedKeys={['1']} items={items} style={{flex: 1, minWidth: 0, justifyContent: 'flex-end'}} />
    <Button icon={<TranslationOutlined />} type="text" onClick={changeLang}>{lng == 'fr_CA' ? 'En' : 'Fr'}</Button>
  </Header>
  );
}

