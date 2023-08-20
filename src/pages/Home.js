import {Content} from "antd/es/layout/layout";
import {Button, Input, Space} from "antd";
import { HappyProvider } from '@ant-design/happy-work-theme';
import {useContext, useRef} from "react";
import {ColorContext} from "../components/providers/ColorContextProvider";

export const Home = () => {
    // لتعديل قيمة المتغيرات العامة نستخدم هذا الأمر
    const {color, changeColor} = useContext(ColorContext);

    // نأخذ الاسم والمعرف من المستخدم
    const inputColor = useRef(null);
    const inputId = useRef(0);

    // جلب القيمة من المتغيرات ووتعديل القيمة الموجودة في الصفحة الأساسية
    // طبعا نجلبها عن طريق المدخلات من المستخدم
    const handleColor = () => {
        changeColor(inputId.current.input.value, inputColor.current.input.value);
    };

    return (
        <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
                {color.id}
            </div>
            <Space>
                <Input type="text" ref={inputColor} placeholder="Please Input"/>
                <Input type="number" ref={inputId}/>
                <HappyProvider>
                    <Button type="dashed" onClick={handleColor}>Submit</Button>
                </HappyProvider>

            </Space>
        </Content>
    );
};