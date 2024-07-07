import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';

function Analytics() {
  const data = useSelector(state => state.transaction.Expenses);

  const aggregatedData = data.reduce((acc, { category, amount }) => {
    const numericAmount = Number(amount); 
    const existingCategory = acc.find(item => item.category === category);
    if (existingCategory) {
      existingCategory.amount += numericAmount;
    } else {
      acc.push({ category, amount: numericAmount });
    }
    return acc;
  }, []);
  console.log(aggregatedData);
  

  return (
    <>
    <div >
        <h1 className="text-2xl font-bold ml-52 mr-52 mt-5" >Bar Chart</h1>
    </div>
    <div className='border ml-5  border-blue-900 border-10 w-1/2'>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={aggregatedData}
          margin={{
            top: 60,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="royalBlue" activeShape={null} shape={<Rectangle fill="royalBlue"  />} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </>
  );
}

export default Analytics;
