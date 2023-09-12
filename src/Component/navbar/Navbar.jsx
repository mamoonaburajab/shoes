import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Menu, Input } from 'antd';

import { HomeOutlined, ShopOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import './Navbar.css'; // Import your custom CSS
import Data from '../../assets/data/Data.json';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleMenuClick = (key) => {
        setActiveMenu(key);
    };

    const handleSearch = () => {
        const foundModel = Data.find(
            (model) => model.id === parseInt(searchInput)
        );

        if (foundModel) {
            navigate(`/item/${foundModel.id}`);
        } else {
            navigate(`/error`);
        }
    };
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">ShoeStore</Link>
            </div>
            <Menu
                mode="horizontal"
                selectedKeys={[activeMenu]}
                onClick={({ key }) => handleMenuClick(key)}
            >
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="shop" icon={<ShopOutlined />}>
                    <Link to="/shop">Shop</Link>
                </Menu.Item>
                <Menu.SubMenu
                    key="categories"
                    icon={<UnorderedListOutlined />}
                    title="Categories"
                >
                    <Menu.Item key="category1">Category 1</Menu.Item>
                    <Menu.Item key="category2">Category 2</Menu.Item>
                    <Menu.Item key="category3">Category 3</Menu.Item>
                    <Menu.Item key="category4">Category 4</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="profile" icon={<UserOutlined />}>
                    <Link to="/login">Profile</Link>
                </Menu.Item>
            </Menu>
            <div className="search">
                <Input.Search
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onSearch={handleSearch}
                />
            </div>
            

        </nav>
    );
};

export default Navbar;
