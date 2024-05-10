/* eslint-disable react/prop-types */
import { XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts';

function GraphWeek({ data }) {
  if (data)
    return (
      <div className=' mt-6 w-full flex items-center justify-center flex-col shadow p-4'>
        <h2 className=' font-medium text-sm mb-3'>
          despesas por semana do ano
        </h2>

        <LineChart width={300} height={200} data={data}>
          <Tooltip />
          <Line dataKey='total' type='monotone' stroke='#101010' />
          <XAxis dataKey='semana' fontSize={'10px'} />
          <YAxis fontSize={'10px'} />
        </LineChart>
      </div>
    );
}

export default GraphWeek;
