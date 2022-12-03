import React from 'react'
import { IExpenseDetail } from '../types'
import './ExpenseItem.css'

export default function ExpenseItem(props: IExpenseDetail) {
  
  const month = props.date.toLocaleString('en-US', {month : 'long'});
  const day = props.date.toLocaleString('en-US', {day : '2-digit'});
  const year = props.date.getFullYear();

  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{}</h2>
        <div className='expense-item__price'>${}</div>
      </div>
    </div>
  )
}
