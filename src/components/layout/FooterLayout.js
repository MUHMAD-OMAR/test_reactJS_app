import React from 'react';
import { Layout } from 'antd';
import {GithubOutlined, TwitterOutlined} from "@ant-design/icons";

export const FooterLayout = () => {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <Layout.Footer style={{ textAlign: 'center' }} className="bg-gray-900 text-white">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
                <div className="flex items-center mb-4 lg:mb-0">
                    <a href="https://" className="text-white hover:text-gray-400 mr-4">
                        <GithubOutlined />
                    </a>
                    <a href="https://" className="text-white hover:text-gray-400">
                        <TwitterOutlined />
                    </a>
                </div>
                <p className="text-white mb-4 lg:mb-0">Custom Footer ©{new Date().getFullYear()} Created by M7MAD OMAR</p>
            </div>
        </Layout.Footer>
    );
};