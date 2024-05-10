import { Link } from 'react-router-dom';
import GraphWeek from '../components/graphweek';
import React from 'react';
import TransitionByDay from '../components/transitionsbyday';

function Relatorie() {
  const [data, setData] = React.useState('');

  React.useEffect(() => {
    async function fetchData() {
      try {
        const url = import.meta.env.VITE_BASE_URL_GET_WEEK;
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className='w-full h-screen flex flex-col p-6'>
      <nav className=' flex items-center gap-3'>
        <Link to={'/'}>voltar</Link>
        <h1 className=' text-lg font-medium'>relatório</h1>
      </nav>
      <GraphWeek data={data} />
      <TransitionByDay />
    </main>
  );
}

export default Relatorie;
