import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { CHG_CURRENCY } from '../utils/types';
import './Currency.css';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (value) => {
        console.log(value)
        dispatch({
            type: CHG_CURRENCY,
            payload: value
        })
    }
    return (
        <div >
            <select title="Currency" 
            className=" mySelect" 
                value={currency} onChange={(event) => handleCurrencyChange(event.target.value)}>
                <option id="prueba2" value="$" selected="text 1">$ Dolar</option>
                <option className="prueba" value="£" label="£ Pound">£ Pound</option>
                <option className="prueba" value="€" label="€ Euro">€ Euro</option>
                <option className="prueba" value="₹" label="₹ Rupee">₹ Rupee</option>
            </select>
        </div >
    )
}

export default Currency; 