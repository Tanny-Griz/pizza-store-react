import React from 'react';
import './style.scss';

const Select = ({id, placeholder, onChange, children}) => {
    return (
        <select 
            id={id}
            placeholder={placeholder}
            onChange={onChange}>
            {children}
        </select>
    )
}

export default Select