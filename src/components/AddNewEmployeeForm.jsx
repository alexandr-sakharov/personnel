import {Button, Card, DatePicker, Divider, Form, Input, Radio, Select} from 'antd';
import {Option} from "antd/es/mentions";
import {MaskedInput} from "antd-mask-input";
import {positions} from "../layout/EmployeesList";

const AddNewEmployeeForm = ({view, isUpdate}) => {
    const [form] = Form.useForm();
    form.setFieldValue('lastName', 'Сахаров')
    form.setFieldValue('firstName', 'Александр')
    form.setFieldValue('patronymic', 'Александрович')
    form.setFieldValue('passport', '1234567890')
    form.setFieldValue('inn', '123456789012')
    form.setFieldValue('SNILS', '1231231231321')
    form.setFieldValue('address', 'Тестовая улица')
    form.setFieldValue('phone', '9033234232')
    form.setFieldValue('mail', 'test@mail.ru')
    form.setFieldValue('position', '15x')

    const onFinish = (data) => {
        const currentSNILS = data.SNILS.match(/\d+/gm).join('')
        const currentPhone = data.phone?.match(/\d+/gm).join('')
        debugger
        const test = form;
    }

    return (
        <Form
            layout="vertical"
            labelCol={{span: 10}}
            wrapperCol={{span: 24}}
            autoComplete="off"
            disabled={view}
            labelWrap={true}
            form={form}
            onFinish={onFinish}
        >
            <Divider>Основная информация</Divider>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Card title="ФИО" style={{width: '100%', marginRight: 10}}>
                    <Form.Item
                        label="Фамилия"
                        name="lastName"
                        rules={[{
                            required: true,
                            message: 'Фамилия обязательна',
                        }]}
                    >
                        <Input placeholder="Фамилия нового сотрудника"/>
                    </Form.Item>

                    <Form.Item
                        label="Имя"
                        name="firstName"
                        rules={[{
                            required: true,
                            message: 'Имя обязательно',
                        }]}
                    >
                        <Input placeholder="Имя нового сотрудника"/>
                    </Form.Item>
                    <Form.Item
                        label="Отчество"
                        name="patronymic"
                        rules={[{
                            required: true,
                            message: 'Отчество обязательно',
                        }]}
                    >
                        <Input placeholder="Отчество нового сотрудника"/>
                    </Form.Item>
                </Card>
                <Card title="Персональные данные" style={{width: '100%'}}>
                    <Form.Item
                        label="Паспорт"
                        name="passport"
                        rules={[
                            {required: true},
                            {
                                pattern: /^\d{10}$/,
                                message: "Серия и номер паспорта содержит 10 цифр"
                            },]}
                    >
                        <MaskedInput disabled={view} mask={'0000000000'}/>
                    </Form.Item>
                    <Form.Item
                        label="ИНН"
                        name="inn"
                        rules={[
                            {required: true},
                            {
                                pattern: /^\d{12}$/,
                                message: "ИНН содержит 12 цифр"
                            },
                        ]}
                    >
                        <MaskedInput disabled={view} mask={'000000000000'}/>
                    </Form.Item>
                    <Form.Item
                        label="СНИЛС"
                        name="SNILS"
                        rules={[
                            {required: true},
                            {
                                pattern: /^\d{3}-\d{3}-\d{3}-\d{2}$/,
                                message: "Не соответствует формату снилса"
                            },
                        ]}
                    >
                        <MaskedInput disabled={view} mask={'000-000-000-00'}/>
                    </Form.Item>
                    <Form.Item
                        label="Дата рождения"
                        name="dateOfBirth"
                        rules={[{
                            required: true,
                            message: 'Дата рождения обязательна',
                        }]}
                    >
                        <DatePicker/>
                    </Form.Item>
                </Card>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Card title="Контактная информация" style={{width: '100%', marginRight: 10, marginTop: 10}}>
                    <Form.Item
                        label="Адрес"
                        name="address"
                        rules={[{
                            required: true,
                            message: 'Фамилия обязательна',
                        }]}
                    >
                        <Input placeholder="Фамилия нового сотрудника"/>
                    </Form.Item>
                    <Form.Item
                        label="Почта"
                        name="mail"
                        rules={[{
                            required: true,
                            message: 'Фамилия обязательна',
                        }]}
                    >
                        <Input placeholder="Фамилия нового сотрудника"/>
                    </Form.Item>
                    <Form.Item
                        label="Номер телефона"
                        name="phone"
                        rules={[
                            {required: true},
                            {
                                pattern: /^\+7\(\d{3}\)\d{3}\-\d{2}-\d{2}$/,
                                message: "Не соответствует формату телефона"
                            },
                        ]}
                    >
                        <MaskedInput disabled={view} mask={'+7(000)000-00-00'}/>
                    </Form.Item>
                </Card>
                <Card title="Вакансия" style={{width: '100%', marginTop: 10}}>
                    <Form.Item name="position" label="Должность" rules={[{
                        required: true,
                        message: 'Должность обязательна'
                    }]}>
                        <Select
                            placeholder="Должность"
                            allowClear
                        >
                            {positions.map((item) => (<Option value={item.key}>{item.label}</Option>))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Дата приема"
                        name="dateOfReceipt"
                        rules={[{
                            required: true,
                            message: 'Дата приема обязательна',
                        }]}
                    >
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item
                        label="Дата увольнения"
                        name="dateOfDismissal"
                    >
                        <DatePicker/>
                    </Form.Item>
                </Card>
            </div>
            {!view && !isUpdate && (
                <Form.Item style={{marginTop: 10}}>
                    <Button type="primary" htmlType="submit">Создать сотрудника</Button>
                </Form.Item>
            )
            }
        </Form>
    );
};
export default AddNewEmployeeForm;