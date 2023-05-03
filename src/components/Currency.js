import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { CHG_CURRENCY } from '../utils/types';
import './Currency.css';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (value) => {
        dispatch({
            type: CHG_CURRENCY,
            payload: value
        })
    }
    return (
        <div >
            <label className='label'>Currency (</label>
            <select className=" mySelect" 
                value={currency} onChange={(event) => handleCurrencyChange(event.target.value)}>
                <option value="$">$ Dolar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
            <label id="lab">)</label>
        </div >
    )
}

export default Currency; 