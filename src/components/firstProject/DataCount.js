import React from 'react';
import {Card} from "antd";

const DataCount = ({personsData}) => {
    return (
        <Card title="عنوان الصفحة" className="mb-4">
            <p className="text-lg font-medium">لديك
                <b> {personsData.length} </b>
                مواعيد اليوم</p>
        </Card>
    );
};

export default DataCount;