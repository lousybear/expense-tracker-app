import React from 'react'
import ExpenseDate from './ExpenseDate'
import { IExpenseDetail } from '../types'
import './ExpenseItem.css'

export default function ExpenseItem(props: IExpenseDetail) {

  return (
    <div className='expense-item'>
      <ExpenseDate/>
      <div className='expense-item__description'>
        <h2>{}</h2>
        <div className='expense-item__price'>${}</div>
      </div>
    </div>
  )
}
