/* eslint-disable react/prop-types */

function StatusSoloFinance({ soloFinance, setSoloFinance }) {
  async function handleClick() {
    try {
      const url = import.meta.env.VITE_BASE_URL_DELETE;
      const response = await fetch(`${url}/${soloFinance.id}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        setSoloFinance(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className=' flex justify-start flex-col p-4 w-[90%] h-[90%] bg-white fixed shadow left-[5%] top-[3%] rounded'>
      <button onClick={() => setSoloFinance(false)}>X</button>

      <section>
        <p>{soloFinance.amount}</p>
        <p>{soloFinance.category}</p>
        <p>{soloFinance.createdAt}</p>
        <p>{soloFinance.descripition}</p>
        <p>{soloFinance.type}</p>

        <button
          className=' bg bg-red-300 px-2 py-1 text-red-700 font-semibold'
          onClick={handleClick}
        >
          deletar
        </button>
      </section>
    </div>
  );
}

export default StatusSoloFinance;
