import React, {useState} from 'react';
import {Input, Button} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

const HeaderProject = ({handelSearch}) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        // Your search logic goes here
        handelSearch(searchValue);
    };

    return (
        <div className="flex justify-between items-center px-32 py-4 bg-gray-900">
            <div className="flex items-center ">
                <img src="https://i.pravatar.cc/150?img=3" alt="Logo" className="h-8 mr-4 rounded-2xl"/>
                <h1 className="text-white font-bold text-lg">My Website</h1>
            </div>
            <div className="flex items-center">
                <Input
                    placeholder="Search"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    onPressEnter={handleSearch}
                    className="bg-gray-800 border-gray-700 text-white rounded-l-md"
                />
                <Button type="primary" icon={<SearchOutlined/>} onClick={handleSearch} className="rounded-r-md">
                    Search
                </Button>
            </div>
        </div>
    );
};

export default HeaderProject;
