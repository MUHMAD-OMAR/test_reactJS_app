import React, {useEffect, useState} from 'react';

const DataPage = () => {
    const [data, setData] = useState([])

    // First way

    // const fetchData = async () => {
    //    fetch('https://jsonplaceholder.typicode.com/posts/')
    //         .then(res => res.json())
    //         .then(data => setDate1(data))
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div>
            <h1>{data.map((item) => <p>
                {item.title}
            </p>)}</h1>
        </div>
    );
};

export default DataPage;