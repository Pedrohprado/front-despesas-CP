/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const DropMenu = ({ drop }) => {
  if (drop)
    return (
      <nav className=' transition w-1/2 h-1/2 bg-slate-100 absolute top-6 right-4 shadow rounded flex text-black flex-col justify-center items-center gap-16'>
        <Link to={'/'} className=' bg-slate-400 w-2/3 text-center py-1 rounded'>
          home
        </Link>
        <Link
          to={'/record'}
          className=' bg-slate-400 w-2/3 text-center py-1 rounded'
        >
          adicionar
        </Link>
        <Link
          to={'/balance'}
          className=' bg-slate-400 w-2/3 text-center py-1 rounded'
        >
          levantamento
        </Link>
      </nav>
    );
};

export default DropMenu;
