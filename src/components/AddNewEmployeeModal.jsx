import React, {useState} from 'react';
import {Button, Modal} from "antd";
import AddNewEmployeeForm from "./AddNewEmployeeForm";
import {logout} from "../utils/authService";
import {useNavigate} from "react-router-dom";

const AddNewEmployeeModal = () => {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const logoutHandler = () => {
        logout()
        navigate('/login')
    }

    return (
        <>
            <Button type="primary" onClick={showModal} style={{marginLeft: 15}}>
                Добавить сотрудника
            </Button>
            <Button type="primary" onClick={() => logoutHandler()} style={{marginLeft: 15}}>
                Выйти
            </Button>
            <Modal
                title="Добавление сотрудника"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={900}
                footer={null}
            >
                    <AddNewEmployeeForm/>
            </Modal>
        </>
    );
};

export default AddNewEmployeeModal;