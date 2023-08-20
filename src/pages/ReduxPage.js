import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "antd";
import {RESET} from "../redux/type";
import {Decrement, Increment} from "../redux/actions";

const ReduxPage = () => {
    const counterRedux = useSelector(state => state.Counter.counter);
    const counterDispatch = useDispatch();


    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <h1>{counterRedux}</h1>

            <Button className="text-white" onClick={() => counterDispatch(Increment)}>Increment</Button>{'  '}
            <Button className="text-white" onClick={() => counterDispatch(Decrement)}>Decrement</Button>{'  '}
            <Button className="text-white" onClick={() => counterDispatch({type: RESET})}>Reset</Button>
        </div>
    );
};

export default ReduxPage;