import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className="expenses">
			{/* Filtering dropdown menu using filter and year  */}
			<ExpensesFilter
				selected={filteredYear}
				onNewSelectedYear={filterChangeHandler}
			/>
			{/* Adding Expense chart component */}
			<ExpensesChart expenses={filteredExpenses} />
			{/* rendreing the intems stores in the expenses array / list */}
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
};

export default Expenses;
