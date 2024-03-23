import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
const LineChart = () => {
    const salesDataWithProfit = [
        { month: 'January', sales: 1000, profit: 200 },
        { month: 'February', sales: 1200, profit: 250 },
        { month: 'March', sales: 1100, profit: 220 },
        { month: 'April', sales: 1400, profit: 280 },
        { month: 'May', sales: 1300, profit: 260 },
        { month: 'June', sales: 1500, profit: 300 },
        { month: 'July', sales: 1700, profit: 340 },
        { month: 'August', sales: 1600, profit: 320 },
        { month: 'September', sales: 1800, profit: 360 },
        { month: 'October', sales: 3000, profit: 1880 },
        { month: 'November', sales: 2000, profit: 1100 },
        { month: 'December', sales: 1800, profit: 1220 },
    ];


    return (
        <div>
            <BarChart width={1200} height={500} data={salesDataWithProfit}>
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                <Tooltip/>
                <Bar dataKey={"sales"} fill='red'></Bar>
                <Bar dataKey={"profit"} fill='green'></Bar>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default LineChart;