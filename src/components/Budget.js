import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { NUMBERS_ONLY, SET_BUDGET } from '../utils/types';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [updatedBudget, setUpdatedBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);

    const handleUpdateBudget = (value) => {
        let updated = value;
        if (value > 20000) {
            updated = 20000;
            alert("The budget cannot exceed 20,000");
        } else if (value < totalExpenses) {
            updated = totalExpenses;
            alert("The budget cannot be less than the amount spent so far");
        }
        setUpdatedBudget(updated);
        dispatch({
            type: SET_BUDGET,
            payload: updated
        })
    }
    return (
        <div className='alert alert-secondary' >
            <span>Budget: {currency}
                <input style={{width:"65%"}}
                    type="number" value={updatedBudget} step={10}
                    onKeyDown={e => NUMBERS_ONLY.includes(e.key) && e.preventDefault()}
                    onChange={(event) => { handleUpdateBudget(event.target.value) }} /> </span>
        </div>
    )
}

export default Budget;
