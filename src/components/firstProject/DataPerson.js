import React from 'react';
import {Avatar, Card, Divider} from "antd";

const DataPerson = ({personsData}) => {
    return (
        <Card className="mb-4">
            <h2 className="text-lg font-medium mb-2">المواعيد المتواجدة</h2>
            <Divider/>
            <ul className="list-inside list-disc">

                {/* Single item */}
                {
                    personsData.map((person, index) => {
                        return (
                            <li>
                                <div className="flex items-center">
                                    <Avatar size={64} src={person.img} className="mr-4"/>
                                    <div>
                                        <p className="text-lg font-medium mb-1">{person.name}</p>
                                        <p className="text-gray-500">{person.date}</p>
                                    </div>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </Card>
    );
};

export default DataPerson;