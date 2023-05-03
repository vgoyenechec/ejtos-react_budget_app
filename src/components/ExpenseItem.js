import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { ADD_EXPENSE, DELETE_EXPENSE, RED_EXPENSE } from '../utils/types';
import { IoMdAddCircle } from "react-icons/io";
import { HiMinusCircle } from "react-icons/hi";
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: DELETE_EXPENSE,
            payload: props.name
        });
    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        }

        dispatch({
            type: ADD_EXPENSE,
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        }

        dispatch({
            type: RED_EXPENSE,
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td style={{ textAlign: 'center', cursor: 'pointer' }}><IoMdAddCircle size='2.5em' color='#4EAE5C' onClick={() => increaseAllocation(props.name)}>+</IoMdAddCircle></td>
            <td style={{ textAlign: 'center', cursor: 'pointer' }}><HiMinusCircle size='2.5em' color='#B01E11' onClick={() => decreaseAllocation(props.name)}>-</HiMinusCircle></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
}

export default ExpenseItem;
