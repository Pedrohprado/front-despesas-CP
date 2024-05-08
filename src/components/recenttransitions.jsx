import React from 'react';
import Icons from './icons';

function RecentTransition() {
  const [data, setData] = React.useState('');

  React.useEffect(() => {
    async function fetchFinances() {
      try {
        const url = import.meta.env.VITE_BASE_URL_GET_ALL_FINANCES;
        const response = await fetch(url);
        const data = await response.json();
        const someDatas = data.slice(-10).reverse();
        setData(someDatas);
      } catch (error) {
        console.log(error);
      }
    }

    fetchFinances();
  }, []);

  function handleClick(id) {
    console.log(id);
  }

  return (
    <section className=' p-5 flex flex-col gap-4 text-zinc-800'>
      <h2 className=' font-bold'>Transações recentes</h2>

      <ul className='max-h-[500px] overflow-auto flex flex-col gap-3'>
        {data
          ? data.map(
              ({ id, category, descripition, type, createdAt, amount }) => (
                <li
                  onClick={() => handleClick(id)}
                  key={id}
                  className='flex items-center justify-between rounded p-4 shadow-md'
                >
                  <div className=' flex items-center gap-4'>
                    <Icons category={category} />

                    <section className='flex flex-col gap-1'>
                      <p className=' font-medium'>{descripition}</p>
                      <p className=' font-light text-sm'>{category}</p>
                    </section>
                  </div>

                  <div>
                    {type === 'income' ? (
                      <p className=' font-medium text-green-700'>R$ {amount}</p>
                    ) : (
                      <p className=' font-medium text-red-700'>R$ {amount}</p>
                    )}
                    <p className=' font-light text-sm'>
                      {createdAt.toString().slice(2, 10)}
                    </p>
                  </div>
                </li>
              )
            )
          : ''}
      </ul>
    </section>
  );
}

export default RecentTransition;
