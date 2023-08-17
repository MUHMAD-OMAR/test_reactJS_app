import React, {useReducer} from 'react';
import {Button} from "antd";
import counterReducer from "../../reducers/counterReducer";

const initialCounter = {
    counter: 0
}

const ContactPage = () => {
    const [state, dispatch] = useReducer(counterReducer, initialCounter)

    return (
        <div>
            <Button onClick={() => dispatch({type: "inc"})}>+</Button>{' '}
            <Button onClick={() => dispatch({type: "dec"})}>-</Button>{' '}
            <Button onClick={() => dispatch({type: "reset"})}>Reset</Button>{' '}
            <h1>{state.counter}</h1>
        </div>
    );
};

export default ContactPage;