import React, { useState } from 'react';
import { counterContext } from './counterContext';
import useLocalStorage from '../Hooks/useLocalStorage'

const StateCompo = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    const [isActive, setIsActive] = useState(window.localStorage.getItem('text'));

    const handleToggle = () => {
        setToggle((t) => !t);
    };

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
