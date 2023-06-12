import React from 'react';
import EmployeesList from "./EmployeesList";
import {Breadcrumb, Layout} from "antd";
import EmployeeCard from "../components/EmployeeCard";
import {Content} from "antd/es/layout/layout";
import {useNavigate} from "react-router-dom";
import {getAuth} from "../utils/authService";

const EmployeeHome = () => {
    const navigate = useNavigate()
    const authData = getAuth()
    if (!authData) {
        navigate('/login')
        return
    }
    return (
        <>
            <Layout>
                <EmployeesList/>
                <Content
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                ><
                    Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Сотрудник</Breadcrumb.Item>
                </Breadcrumb>
                    <EmployeeCard/>
                </Content>
            </Layout>
        </>
    );
};

export default EmployeeHome;