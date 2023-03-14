import { useState } from "react"
export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key);

        return storedData ? JSON.parse(storedData) : defaultValue;
    });

    
    const setLocalStorageValue = (newValue) => {
        // if(key === 'auth'){
            localStorage.setItem(key, JSON.stringify(newValue));
        // } else {
        //     let oldValue = localStorage.getItem(key)
        // }

        setValue(newValue);
    };
    
    return[
        value,
        setLocalStorageValue,
    ];
}