import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const navItems = [
    {
      name: 'Expenses',
      path: '/'
    },
    {
      name: 'Category',
      path: '/category'
    },
    {
      name:'Analytics',
      path:'/analytics'
    }
  ];

  return (
    <div className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Expense Tracker</h1>
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  className="text-white hover:text-blue-300"
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
