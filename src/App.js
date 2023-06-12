import React from 'react';
import {Breadcrumb, Layout} from 'antd';
import 'antd/dist/reset.css';
import './App.css';

import {ConfigProvider} from 'antd'
import ruRu from 'antd/es/locale/ru_RU'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import LoginForm from "./components/LoginForm";
import {Route, Routes} from "react-router-dom";
import PageTemplate from "./layout/PageTemplate";
import EmployeeHome from "./layout/EmployeeHome";

ConfigProvider.config({
    prefixCls: 'ant',
})

const {Content} = Layout;

const App = () => {
    return (
        <ConfigProvider locale={ruRu}>
            <Layout style={{minHeight: '100vh'}}>
                <Routes>
                    <Route path="/" element={<PageTemplate/>}>
                        <Route path="/employee" element={<EmployeeHome/>}/>
                    </Route>
                    <Route path="/login" element={<LoginForm/>}/>
                </Routes>
            </Layout>
            <ReactQueryDevtools initialIsOpen={false}/>
        </ConfigProvider>
    );
};
export default App;