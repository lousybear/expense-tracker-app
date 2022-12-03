export interface IExpenseDate {
  date: Date;
}

export interface IExpenseDetail extends IExpenseDate {
  id: string;
  title: string;
  amount: number;
}
