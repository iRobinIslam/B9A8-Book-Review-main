import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const LineChart = () => {
  const data = [
    { rating: 4.3, publish_year: 1951 },
    { rating: 4.6, publish_year: 1960 },
    { rating: 4.5, publish_year: 1949 },
    { rating: 4.4, publish_year: 1925 },
    { rating: 4.7, publish_year: 1813 },
    { rating: 4.8, publish_year: 1937 },
  ];

  return (
    <div>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="publish_year" />
        <YAxis />
        <Tooltip />
        <Legend />
        {colors.map((color, index) => (
          <Bar key={index} dataKey="rating" fill={color} barSize={10} />
        ))}
      </BarChart>
    </div>
  );
};

export default LineChart;
