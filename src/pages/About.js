import React, {useContext} from 'react';
import {ColorContext} from "../components/providers/ColorContextProvider";

export const About = () => {

    const {color} = useContext(ColorContext);

    return (
        <div>
            <h1>{color.name}</h1>
        </div>

    );
};