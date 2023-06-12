import {Button, message, Form, Input} from 'antd';
import {loginApi} from "../repository/authRepository";
import {getAuth, setAuth} from "../utils/authService";
import {useNavigate} from "react-router-dom";
import React from "react";

const LoginForm = () => {
    const navigate = useNavigate()

    const onFinish = async (values) => {
        const isLogin = await loginApi(values.username, values.password)
        if (isLogin === false) {
            message.info('Ошибка входа');
            return
        }
        setAuth(isLogin.data?.username, isLogin.data?.adminMode)
        navigate('/employee')
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 1000,
                    minWidth: 450
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Логин"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Логин обязательно',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Пароль обязателен',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
   )
};
export default LoginForm;