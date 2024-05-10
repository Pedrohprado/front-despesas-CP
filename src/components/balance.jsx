import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoArrowDown, IoArrowUp } from 'react-icons/io5';
import { RiCloseLine } from 'react-icons/ri';
import DropMenu from './dropmenu';

const Balance = () => {
  const [data, setData] = React.useState('');
  const [drop, setDrop] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const url = import.meta.env.VITE_BASE_URL_GET_SOMES;
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
    <section className=' w-full h-[40%]  bg-zinc-950 text-white rounded-b-xl p-5 flex flex-col justify-between shadow'>
      <header className=' flex items-center justify-between'>
        <nav className='flex items-center gap-3'>
          <div className=' w-14 h-14 rounded-full bg-white'></div>
          <section>
            <h1 className=' font-bold text-lg'>Oi, Pedro e Camila</h1>
            <p className=' font-medium text-sm'>Bem vindo/s de volta!</p>
          </section>
        </nav>

        <button
          onClick={() => setDrop(!drop)}
          className=' flex items-center justify-center w-10 h-10 z-10 rounded-full'
        >
          {drop ? (
            <RiCloseLine size={28} color='black' />
          ) : (
            <HiMenuAlt3 size={28} />
          )}
        </button>
        <DropMenu drop={drop} />
      </header>

      <div className=' flex flex-col justify-center gap-2'>
        <p className='text-md'>Levantamento</p>
        <h2 className=' font-bold text-3xl'>R$ {data.total},00</h2>
      </div>

      <div className=' flex justify-center items-center gap-2'>
        <div className=' w-1/2 bg-white text-zinc-900 rounded flex items-center justify-center gap-4 py-5'>
          <div className=' flex items-center justify-center w-8 h-8 bg-green-200 rounded-full'>
            <IoArrowUp size={22} color='green' />
          </div>

          <section>
            <p className=' text-green-700 font-medium'>renda</p>
            <h2 className=' text-lg font-bold'>R${data.incomes}</h2>
          </section>
        </div>

        <div className=' w-1/2 bg-white text-zinc-900 rounded flex items-center justify-center gap-4 py-5'>
          <div className=' flex items-center justify-center w-8 h-8 bg-red-200 rounded-full'>
            <IoArrowDown size={22} color='red' />
          </div>
          <section>
            <p className=' font-medium text-red-700'>despesas</p>
            <h2 className=' text-lg font-bold'>R$-{data.expenses}</h2>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Balance;
