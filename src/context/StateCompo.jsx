import React, { useState } from 'react';
import { counterContext } from './counterContext';

const StateCompo = ({ children }) => {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        setToggle((t) => !t);
    };

    const [isActive, setIsActive] = useState(window.localStorage.getItem('text'));
    const setLocalStorage = (value) => {
        handleToggle();
        try {
            setIsActive(value);
            window.localStorage.setItem('text', value);
        } catch (error) {
            console.error(error);
        }
    };
    const toggleTrue = () => {
        setIsActive(true);
        handleToggle();

    };


    return (
        <counterContext.Provider
            value={{ handleToggle, toggle, setLocalStorage, setIsActive, isActive, toggleTrue }}
        >
            {children}

        </counterContext.Provider>
    );
};

export default StateCompo;
