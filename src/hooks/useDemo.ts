import { useState } from 'react';

// Demo data
const DEMO_USER = {
  id: 'demo-user',
  name: 'Demo User',
  email: 'demo@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
};

const DEMO_TRANSACTIONS = [
  {
    id: 'tr1',
    type: 'expense',
    amount: 1250.00,
    category: 'Housing',
    description: 'Monthly Rent',
    date: '2024-03-01',
    isRecurring: true
  },
  {
    id: 'tr2',
    type: 'income',
    amount: 5000.00,
    category: 'Salary',
    description: 'Monthly Salary',
    date: '2024-03-01',
    isRecurring: true
  },
  {
    id: 'tr3',
    type: 'expense',
    amount: 85.50,
    category: 'Utilities',
    description: 'Electricity Bill',
    date: '2024-03-05',
    isRecurring: true
  }
];

const DEMO_INVESTMENTS = [
  {
    id: 'inv1',
    type: 'stock',
    name: 'AAPL',
    quantity: 10,
    purchasePrice: 150.00,
    currentPrice: 175.25
  },
  {
    id: 'inv2',
    type: 'crypto',
    name: 'BTC',
    quantity: 0.5,
    purchasePrice: 35000.00,
    currentPrice: 40000.00
  }
];

const DEMO_BUDGETS = [
  {
    id: 'bdg1',
    category: 'Housing',
    limit: 1500.00,
    spent: 1250.00,
    period: 'monthly'
  },
  {
    id: 'bdg2',
    category: 'Food',
    limit: 600.00,
    spent: 450.75,
    period: 'monthly'
  }
];

const DEMO_GOALS = [
  {
    id: 'gl1',
    name: 'Emergency Fund',
    targetAmount: 10000.00,
    currentAmount: 5500.00,
    deadline: '2024-12-31',
    category: 'Savings'
  }
];

export const useDemo = () => {
  const [isDemo, setIsDemo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const startDemoSession = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Store demo data in localStorage
      localStorage.setItem('demo_mode', 'true');
      localStorage.setItem('demo_user', JSON.stringify(DEMO_USER));
      localStorage.setItem('demo_transactions', JSON.stringify(DEMO_TRANSACTIONS));
      localStorage.setItem('demo_investments', JSON.stringify(DEMO_INVESTMENTS));
      localStorage.setItem('demo_budgets', JSON.stringify(DEMO_BUDGETS));
      localStorage.setItem('demo_goals', JSON.stringify(DEMO_GOALS));

      setIsDemo(true);
      return true;
    } catch (err) {
      setError('Failed to start demo session. Please try again.');
      console.error(err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const endDemoSession = () => {
    setIsLoading(true);
    setError(null);

    try {
      // Clear demo data from localStorage
      localStorage.removeItem('demo_mode');
      localStorage.removeItem('demo_user');
      localStorage.removeItem('demo_transactions');
      localStorage.removeItem('demo_investments');
      localStorage.removeItem('demo_budgets');
      localStorage.removeItem('demo_goals');

      setIsDemo(false);
    } catch (err) {
      setError('Failed to end demo session. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getDemoData = () => {
    if (!localStorage.getItem('demo_mode')) return null;

    return {
      user: JSON.parse(localStorage.getItem('demo_user') || 'null'),
      transactions: JSON.parse(localStorage.getItem('demo_transactions') || '[]'),
      investments: JSON.parse(localStorage.getItem('demo_investments') || '[]'),
      budgets: JSON.parse(localStorage.getItem('demo_budgets') || '[]'),
      goals: JSON.parse(localStorage.getItem('demo_goals') || '[]')
    };
  };

  return {
    isDemo,
    isLoading,
    error,
    startDemoSession,
    endDemoSession,
    getDemoData
  };
};