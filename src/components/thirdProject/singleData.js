import {useParams} from "react-router-dom";

const SingleData = () => {
    const param = useParams()


    return (
        <div className="p-32 flex justify-center bg-gray-900 text-white min-h-screen">
            <h1 className="text-4xl">{param.id}</h1>
        </div>
    );
};

export default SingleData;