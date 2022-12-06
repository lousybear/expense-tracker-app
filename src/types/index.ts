export interface IExpenseDate {
  date: Date;
}

export interface IExpenseDetail extends IExpenseDate {
  title: string;
  amount: number;
}
