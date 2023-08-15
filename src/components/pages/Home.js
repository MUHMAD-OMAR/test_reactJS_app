import React from 'react';
import {Content} from "antd/es/layout/layout";
import {Button, Input, Space} from "antd";
import { HappyProvider } from '@ant-design/happy-work-theme';

export const Home = () => {

    return (
        <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
                Content goes here.
            </div>
            <Space>
                <Input placeholder="Please Input" />
                <HappyProvider>
                    <Button type="dashed">Submit</Button>
                </HappyProvider>

            </Space>
        </Content>
    );
};