import React, { useState, useCallback } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Plus, Trash2 } from 'lucide-react';

interface Expense {
  id: string;
  name: string;
  amount: number;
}

function ET() {
  const [salary, setSalary] = useState<string>('');
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpenseName, setNewExpenseName] = useState<string>('');
  const [newExpenseAmount, setNewExpenseAmount] = useState<string>('');

  const COLORS = ['#6D28D9', '#8B5CF6', '#A78BFA', '#C4B5FD', '#DDD6FE', '#EDE9FE', '#F5F3FF'];

  const addExpense = useCallback(() => {
    if (newExpenseName && newExpenseAmount && parseFloat(newExpenseAmount) > 0) {
      const newExpense: Expense = {
        id: crypto.randomUUID(),
        name: newExpenseName,
        amount: parseFloat(newExpenseAmount),
      };
      setExpenses((prev) => [...prev, newExpense]);
      setNewExpenseName('');
      setNewExpenseAmount('');
    }
  }, [newExpenseName, newExpenseAmount]);

  const removeExpense = useCallback((id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  }, []);

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const salaryValue = parseFloat(salary) || 0;
  const remainingBalance = salaryValue - totalExpenses;

  const chartData = expenses.map((expense) => ({
    name: expense.name,
    value: expense.amount,
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gray-900 rounded-2xl shadow-xl p-6 md:p-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
            Expense Tracker
          </h1>

          {/* Salary Input */}
          <div className="mb-8">
            <label htmlFor="salary" className="block text-sm font-medium text-gray-300 mb-2">
              Monthly Salary
            </label>
            <input
              type="number"
              id="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
              placeholder="Enter your monthly salary"
            />
          </div>

          {/* Add Expense Form */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <label htmlFor="expenseName" className="block text-sm font-medium text-gray-300 mb-2">
                Expense Name
              </label>
              <input
                type="text"
                id="expenseName"
                value={newExpenseName}
                onChange={(e) => setNewExpenseName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                placeholder="e.g., Rent"
              />
            </div>
            <div>
              <label htmlFor="expenseAmount" className="block text-sm font-medium text-gray-300 mb-2">
                Amount
              </label>
              <input
                type="number"
                id="expenseAmount"
                value={newExpenseAmount}
                onChange={(e) => setNewExpenseAmount(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                placeholder="Enter amount"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={addExpense}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Plus size={20} />
                Add Expense
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Expenses List */}
            <div>
              <h2 className="text-xl font-semibold text-gray-200 mb-4">Expenses</h2>
              <div className="space-y-3">
                {expenses.map((expense) => (
                  <div key={expense.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-100">{expense.name}</h3>
                      <p className="text-gray-400">₹{expense.amount.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeExpense(expense.id)}
                      className="text-red-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
                {expenses.length === 0 && <p className="text-gray-500 text-center py-4">No expenses added yet</p>}
              </div>
            </div>

            {/* Pie Chart */}
            <div>
              <h2 className="text-xl font-semibold text-gray-200 mb-4">Expense Distribution</h2>
              <div className="h-[300px] bg-gray-800 rounded-lg p-4">
                {expenses.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <p className="text-gray-500">Add expenses to see the chart</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-300 mb-1">Total Salary</h3>
              <p className="text-2xl font-bold text-gray-100">₹{salaryValue.toFixed(2)}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-300 mb-1">Total Expenses</h3>
              <p className="text-2xl font-bold text-red-400">₹{totalExpenses.toFixed(2)}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-300 mb-1">Remaining Balance</h3>
              <p className={`text-2xl font-bold ${remainingBalance >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                ₹{remainingBalance.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ET;