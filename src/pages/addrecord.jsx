import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AddRecord() {
  const [selectType, setSelectType] = React.useState('income');
  const [amount, setAmount] = React.useState('');
  const [descripition, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('salary');

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      let body = {};
      if (selectType === 'expenses') {
        body = {
          amount: -+amount,
          category,
          descripition,
          type: selectType,
        };
      } else {
        body = {
          amount: +amount,
          category,
          descripition,
          type: selectType,
        };
      }

      const url = import.meta.env.VITE_BASE_URL_POST_FINANCE;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const json = await response.json();
      console.log(json);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main className='w-full h-screen flex flex-col p-6'>
      <nav className=' flex items-center gap-3'>
        <Link to={'/'}>voltar</Link>

        <h1 className=' text-lg font-medium'>Adicionar Registro</h1>
      </nav>

      <div className=' w-full flex justify-center items-center mt-5 bg-[#dadada]'>
        <button
          onClick={() => setSelectType('income')}
          className=' w-1/2 py-4 font-sm text-sm rounded transition'
          style={{
            backgroundColor: selectType === 'income' ? 'black' : '#dadada',
            color: selectType === 'income' ? 'white' : 'black',
          }}
        >
          renda
        </button>
        <button
          onClick={() => setSelectType('expenses')}
          className=' w-1/2 py-4 font-sm text-sm rounded transition'
          style={{
            backgroundColor: selectType !== 'income' ? 'black' : '#dadada',
            color: selectType !== 'income' ? 'white' : 'black',
          }}
        >
          despesa
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className=' shadow rounded flex p-4 mt-6 flex-col gap-5'
      >
        <label className=' flex flex-col items-start gap-1 w-full font-medium'>
          Quantia
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            type='number'
            required
            className='border w-full py-4 px-2rounded font-light'
          />
        </label>
        <label className=' flex flex-col items-start gap-1 w-full font-medium'>
          Descrição
          <input
            value={descripition}
            onChange={({ target }) => setDescription(target.value)}
            type='text'
            required
            className='border w-full py-4 px-2rounded font-light'
          />
        </label>

        <label className=' flex flex-col items-start gap-1 w-full font-medium'>
          Categoria
          <select
            required
            className='border w-full py-4 px-2rounded font-light'
            value={category}
            onChange={({ target }) => setCategory(target.value)}
          >
            <option value='salary'>salário</option>
            <option value='food'>comida</option>
            <option value='wedding'>casamento</option>
            <option value='health'>saúde</option>
            <option value='shopping'>compra</option>
            <option value='sport'>esport</option>
            <option value='fuel'>gasolina</option>
          </select>
        </label>

        <button className=' bg-zinc-900 text-white py-4 rounded'>
          adicionar registro
        </button>
      </form>
    </main>
  );
}

export default AddRecord;
