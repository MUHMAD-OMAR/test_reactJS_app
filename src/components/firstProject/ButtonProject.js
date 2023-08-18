import React from 'react';
import {Button} from "antd";

const ButtonProject = ({deleteAll, showAll}) => {
    return (
        <div className="flex justify-between">
            <Button onClick={deleteAll} type="primary" className="w-1/2 mr-4"
                    style={{backgroundColor: '#4299e1', borderColor: '#4299e1'}}> مسح الكل </Button>
            <Button onClick={showAll} type="primary" className="w-1/2"
                    style={{backgroundColor: '#4299e1', borderColor: '#4299e1'}}> عرض البيانات </Button>
        </div>
    );
};

export default ButtonProject;