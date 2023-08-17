import React from 'react';
import {Avatar, Button, Card, Divider} from 'antd';

const FirstProjectPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <Card title="عنوان الصفحة" className="mb-4">
                <p className="text-lg font-medium">لديك 5 مواعيد اليوم</p>
            </Card>
            <Card className="mb-4">
                <h2 className="text-lg font-medium mb-2">المواعيد المتواجدة</h2>
                <Divider/>
                <ul className="list-inside list-disc">

                    {/* Single item */}
                    <li>
                        <div className="flex items-center">
                            <Avatar size={64} src="https://i.pravatar.cc/150?img=1" className="mr-4"/>
                            <div>
                                <p className="text-lg font-medium mb-1">اسم المستخدم</p>
                                <p className="text-gray-500">الموعد</p>
                            </div>
                        </div>
                    </li>

                </ul>
            </Card>
            <div className="flex justify-between">
                <Button type="primary" className="w-1/2 mr-4"
                        style={{backgroundColor: '#4299e1', borderColor: '#4299e1'}}> مسح الكل </Button>
                <Button type="primary" className="w-1/2"
                        style={{backgroundColor: '#4299e1', borderColor: '#4299e1'}}> عرض البيانات </Button>
            </div>

        </div>
    );
};

export default FirstProjectPage;