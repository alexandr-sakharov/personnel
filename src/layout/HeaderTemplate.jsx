import React from 'react';
import {Button, Layout} from "antd";
import AddNewEmployeeModal from "../components/AddNewEmployeeModal";
import {getAuth, logout} from "../utils/authService";
import {useNavigate} from "react-router-dom";

const {Header} = Layout;

const HeaderTemplate = () => {
    const navigate = useNavigate()
    const authData = getAuth()
    if (!authData) {
        navigate('/login')
        return
    }
    return (
        <Header className="header">
                <span style={{color: 'white'}}>
                    ООО Алмаз
                </span>
            {authData
                ? (<AddNewEmployeeModal/>)
                : null
            }
        </Header>
    );
};

export default HeaderTemplate;