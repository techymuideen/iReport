import PropTypes from 'prop-types';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Colors for the pie chart segments
const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

const Chart = ({ chartData }) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 flex flex-col items-center md:items-start'>
      <h2 className='text-2xl font-semibold mb-4 text-center md:text-left'>
        Report Stats
      </h2>
      <div className='w-full h-[25rem] sm:h-[20rem]'>
        <ResponsiveContainer width='100%'>
          <PieChart>
            <Pie
              data={chartData}
              dataKey='value'
              nameKey='name'
              cx='72%'
              cy='40%'
              innerRadius={80}
              outerRadius={120}
              fill='#8884d8'
              paddingAngle={2}>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  stroke={COLORS[index % COLORS.length]}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              align='right'
              verticalAlign='bottom'
              width='30%'
              layout='vertical'
              iconSize={15}
              iconType='circle'
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

Chart.propTypes = {
  chartData: PropTypes.array.isRequired,
};

export default Chart;
