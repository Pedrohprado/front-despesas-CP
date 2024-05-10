import React from 'react';
import Icons from './icons';
import Calendar from './calendar';
import StatusSoloFinance from './statussolofinance';

const TransitionByDay = () => {
  const [data, setData] = React.useState('');
  const [date, setDate] = React.useState(new Date().toISOString().slice(0, 10));
  const [dropCalendar, setDropCalendar] = React.useState(false);
  const [stringData, setStringData] = React.useState('');
  const [soloFinance, setSoloFinance] = React.useState('');

  React.useEffect(() => {
    async function fetchData() {
      try {
        const newDate = new Date(date).toISOString().slice(0, 10);

        setStringData(newDate);
        const url = import.meta.env.VITE_BASE_URL_GET_DAY;
        if (newDate) {
          const response = await fetch(`${url}/${newDate}`);
          const data = await response.json();
          setData(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [date, soloFinance]);

  async function handleClick(id) {
    console.log(id);

    try {
      const url = import.meta.env.VITE_BASE_URL_GET_ID;
      const response = await fetch(`${url}/${id}`);
      const json = await response.json();
      setSoloFinance(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <section className=' flex mt-10 mb-2 items-center justify-between'>
        <h2 className=' font-medium text-sm '>{stringData}</h2>
        <button
          onClick={() => setDropCalendar(!dropCalendar)}
          className=' font-light text-sm text-white rounded bg-zinc-900 px-4 py-1'
        >
          day
        </button>
        {dropCalendar ? <Calendar date={date} setDate={setDate} /> : null}
      </section>

      {soloFinance ? (
        <StatusSoloFinance
          soloFinance={soloFinance}
          setSoloFinance={setSoloFinance}
        />
      ) : (
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
                        <p className=' font-medium text-green-700'>
                          R$ {amount}
                        </p>
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
      )}
    </div>
  );
};

export default TransitionByDay;
