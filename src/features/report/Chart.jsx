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
  console.log(chartData);
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md md:items-start">
      <h2 className="mb-4 text-center text-2xl font-semibold md:text-left">
        Report Stats
      </h2>
      <div className="h-[25rem] w-full sm:h-[20rem]">
        <ResponsiveContainer width="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="72%"
              cy="40%"
              innerRadius={80}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={2}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  stroke={COLORS[index % COLORS.length]}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              align="right"
              verticalAlign="bottom"
              width="30%"
              layout="vertical"
              iconSize={15}
              iconType="circle"
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
