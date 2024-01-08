import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({ target }) => {
        setinputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const cleanInput = inputValue.trim();

        if(cleanInput.length <= 1) return;

        onNewCategory(cleanInput);
        setinputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gift"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
