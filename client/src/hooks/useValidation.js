/* eslint-disable */
import { useState } from "react";

export const useEmailValidator = ({}) => {
    const [errors, setErrors] = useState({});
    const emailValidation = (e, values) => {
        let regx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        setErrors(state => ({
            ...state,
            [e.target.name]: !regx.test(values[e.target.name]),
        }));
    };

    return[
        errors,
        emailValidation,
    ]
}

export const useUrlValidator = ({}) => {
    const [errors, setErrors] = useState({});
    const urlValidation = (e, values) => {
        let regx = new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
        setErrors(state => ({
            ...state,
            [e.target.name]: !regx.test(values[e.target.name]),
        }));
    };

    return[
        errors,
        urlValidation,
    ]
}

export const useMinLenght = ({}) => {
    const [errors, setErrors] = useState({});
    const minLengthValidation = (e, limit, values) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length <= limit,
        }));
    };

    return[
        errors,
        minLengthValidation,
    ]
};
