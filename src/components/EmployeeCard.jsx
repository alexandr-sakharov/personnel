import React, {useState} from 'react';
import {CheckOutlined, EditOutlined} from "@ant-design/icons";
import {Card, Skeleton, Space} from "antd";
import AddNewEmployeeForm from "./AddNewEmployeeForm";

const EmployeeCard = () => {
    const [isEditMode, setEditMode] = useState(false)
    return (
        <Card
            style={{
                width: 900,
                marginTop: 16,
            }}
            actions={[
                !isEditMode
                    ? <EditOutlined
                        key="edit"
                        onClick={() => setEditMode(true)}
                    />
                    : <CheckOutlined
                        key="save"
                        onClick={() => setEditMode(false)}
                    />
            ]}
        >
            {isEditMode
                ? (<>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Card title="ФИО" style={{width: '100%', marginRight: 10}}>
                                <div>
                                    <Skeleton.Input active size="small" style={{width: 300}}/>
                                </div>
                                <div style={{marginTop: 20}}>
                                    <Skeleton.Input active size="small" style={{width: 300}}/>
                                </div>
                                <div style={{marginTop: 20}}>
                                    <Skeleton.Input active size="small" style={{width: 300}}/>
                                </div>
                            </Card>
                            <Card title="Персональные данные" style={{width: '100%'}}>
                                <div>
                                    <Skeleton.Input active size="small" style={{width: 300}}/>
                                </div>
                                <div style={{marginTop: 20}}>
                                    <Skeleton.Input active size="small" style={{width: 300}}/>
                                </div>
                                <div style={{marginTop: 20}}>
                                    <Skeleton.Input active size="small" style={{width: 300}}/>
                                </div>
                                <div style={{marginTop: 20}}>
                                    <Skeleton.Input active size="small" style={{width: 300}}/>
                                </div>
                            </Card>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Card title="Контактная информация" style={{width: '100%', marginRight: 10, marginTop: 10}}>
                                <div>
                                    <Skeleton.Input active size="small" style={{width: 300}}/>
                                </div>
                                <div style={{marginTop: 20}}>
                                    <Skeleton.Input active size="small" style={{width: 300}}/>
                                </div>
                                <div style={{marginTop: 20}}>
                                    <Skeleton.Input active size="small" style={{width: 300}}/>
                                </div>
                            </Card>
                            <Card title="Вакансия" style={{width: '100%', marginTop: 10}}>
                                <div>
                                    <Skeleton.Input active size="small" style={{width: 300}}/>
                                </div>
                                <div style={{marginTop: 20}}>
                                    <Skeleton.Input active size="small" style={{width: 300}}/>
                                </div>
                                <div style={{marginTop: 20}}>
                                    <Skeleton.Input active size="small" style={{width: 300}}/>
                                </div>
                                <div style={{marginTop: 20}}>
                                    <Skeleton.Input active size="small" style={{width: 300}}/>
                                </div>
                            </Card>
                        </div>
                    </>
                )
                : (
                    <AddNewEmployeeForm view />

                )
            }
            {isEditMode && (<AddNewEmployeeForm isUpdate />)}
        </Card>
    );
};

export default EmployeeCard;