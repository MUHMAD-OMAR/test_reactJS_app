import React, {createContext, useState} from 'react';

const ColorContext = createContext(undefined);
const ColorContextProvider = ({children}) => {

    const [color, setColor] = useState({id: 0, name: "GG"});

    // عمل دالة لتغير القيمة العادة ووضع قيمة افتراضية
    const changeColor = (id, name) => {
        setColor({id, name});
    }

    return (
        // تعريف المتغير ضمن المشروع كاملات ووضع قيمة له ودالة من أجل تغير القيمة
        <ColorContext.Provider value={{color, changeColor}}>
            {children}
        </ColorContext.Provider>
    );
};

export {ColorContextProvider, ColorContext};