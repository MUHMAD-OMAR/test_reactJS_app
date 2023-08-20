import { Layout, Menu } from 'antd';
import {Link} from "react-router-dom";


const HeaderLayout = () => {
    return (
        <Layout.Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to='/about'>About</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to='/contact'>Contact</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to='/fetch'>Fetch Data</Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to='/firstProject'>First Project</Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link to='/secondProject'>Second Project</Link>
                </Menu.Item>
                <Menu.Item key="7">
                    <Link to='/thirdProject'>Third Project</Link>
                </Menu.Item>
                <Menu.Item key="8">
                    <Link to='/reduxPage'>Redux Project</Link>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    );
}

export {HeaderLayout}