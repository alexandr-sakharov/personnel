import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { Outlet, useLocation } from 'react-router-dom'
import HeaderTemplate from "./HeaderTemplate";

const PageTemplate = () => {
    const location = useLocation()
    useEffect(() => {}, [location.pathname])
    return (
        <Layout>
            <HeaderTemplate/>
            <Outlet/>
        </Layout>
    )
}

export default PageTemplate
