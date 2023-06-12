import React from 'react';
import {Layout, Menu} from "antd";
import {
    UserOutlined, BarChartOutlined, BulbOutlined, CarOutlined, CodeOutlined, DatabaseOutlined,
DollarOutlined
} from "@ant-design/icons";

const {Sider} = Layout;

const staff = [
    {key: 1, label: `Аварин Е.Ф.`,},
    {key: 2, label: `Алексеев М.Ю.`,},
    {key: 3, label: `Викторов С.П.`,},
    {key: 4, label: `Владыкина Ю.И.`,},
    {key: 5, label: `Зорина А.С.`,},
    {key: 6, label: `Иванов И.И.`,},
    {key: 7, label: `Кириллов К.К.`,},
    {key: 8, label: `Лебедева М.П.`,},
    {key: 9, label: `Медведев Н.В.`,},
    {key: 10, label: `Михеева Т.А.`,},
    {key: 11, label: `Петров П.П.`,},
    {key: 12, label: `Петрушкин Н.И.`,},
    {key: 13, label: `Потапова И.В.`,},
    {key: 14, label: `Привалова О.А.`,},
    {key: 15, label: `Рубикова А.В.`,},
    {key: 16, label: `Рыбов И.С.`,},
    {key: 17, label: `Сахаров А.А.`,},
    {key: 18, label: `Сидеров С.С.`,},
    {key: 19, label: `Статуева А.С.`,},
    {key: 20, label: `Фрязев Ф.И.`,},
    {key: 21, label: `Цветков Ю.А.`,},
    {key: 22, label: `Шевченко Л.В.`,},
    {key: 23, label: `Шукшин К.Д.`,},
]

export const items = [
    { key: '1x', label: 'Юрист', icon:  React.createElement(UserOutlined), children: staff.slice(0, 1) },
    { key: '2x', label: 'Металлург', icon:  React.createElement(UserOutlined), children: staff.slice(1, 2) },
    { key: '3x', label: 'Начальник цеха', icon:  React.createElement(UserOutlined), children: staff.slice(2, 3) },
    { key: '15x', label: 'Программист', icon:  React.createElement(CodeOutlined), children: staff.slice(16, 17) },
    { key: '4x', label: 'Сборщик', icon:  React.createElement(UserOutlined), children: staff.slice(3, 4) },
    { key: '5x', label: 'Слесарь', icon:  React.createElement(UserOutlined), children: staff.slice(4, 5) },
    { key: '6x', label: 'Аналитик', icon:  React.createElement(BarChartOutlined), children: staff.slice(5, 6) },
    { key: '7x', label: 'Финансист', icon:  React.createElement(UserOutlined), children: staff.slice(6, 7) },
    { key: '8x', label: 'Инженер', icon:  React.createElement(UserOutlined), children: staff.slice(7, 8) },
    { key: '9x', label: 'Технолог', icon:  React.createElement(UserOutlined), children: staff.slice(8, 9) },
    { key: '10x', label: 'Электрик', icon:  React.createElement(BulbOutlined), children: staff.slice(9, 10) },
    { key: '11x', label: 'Менеджер по продажам', icon:  React.createElement(DollarOutlined), children: staff.slice(10, 11) },
    { key: '12x', label: 'Начальник отдела продаж', icon:  React.createElement(DollarOutlined), children: staff.slice(11, 12) },
    { key: '13x', label: 'Менеджер по закупкам', icon:  React.createElement(DollarOutlined), children: staff.slice(12, 13) },
    { key: '14x', label: 'Логист', icon:  React.createElement(CarOutlined), children: staff.slice(13, 14) },
    { key: '16x', label: 'Системный администратор', icon:  React.createElement(DatabaseOutlined), children: staff.slice(15, 16) },
    { key: '17x', label: 'Бухгалтер', icon:  React.createElement(UserOutlined), children: [staff[18]] },
    { key: '18x', label: 'Помощник бухгалтера', icon:  React.createElement(UserOutlined), children: staff.slice(17, 18) },
    { key: '19x', label: 'Помощник логиста', icon:  React.createElement(UserOutlined), children: staff.slice(18, 19) },
    { key: '20x', label: 'Специалист по кадрам', icon:  React.createElement(UserOutlined), children: staff.slice(19, 22) }
]

export const positions = items.map(item => ({ key: item.key, label: item.label }))

const EmployeesList = () => {
    return (
        <Sider
            width={200}
        >
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                    height: '100%',
                    borderRight: 0,
                }}
                items={items}
            />
        </Sider>
    );
};

export default EmployeesList;