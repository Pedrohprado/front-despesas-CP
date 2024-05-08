/* eslint-disable react/prop-types */
import {
  MdSportsFootball,
  MdFastfood,
  MdOutlineShoppingCart,
  MdHealthAndSafety,
} from 'react-icons/md';
import { TiHeartFullOutline } from 'react-icons/ti';
import { FaMoneyBill } from 'react-icons/fa';
import { BsFuelPumpFill } from 'react-icons/bs';

function Icons({ category }) {
  switch (category) {
    case 'health':
      return (
        <div className='w-10 h-10 bg-slate-300 p-1 flex justify-center items-center rounded'>
          <MdHealthAndSafety />
        </div>
      );
    case 'sport':
      return (
        <div className='w-10 h-10 bg-orange-300 p-1 flex justify-center items-center rounded'>
          <MdSportsFootball />
        </div>
      );
    case 'salary':
      return (
        <div className='w-10 h-10 bg-green-300 p-1 flex justify-center items-center rounded'>
          <FaMoneyBill />
        </div>
      );

    case 'food':
      return (
        <div className='w-10 h-10 bg-yellow-300 p-1 flex justify-center items-center rounded'>
          <MdFastfood />
        </div>
      );

    case 'shopping':
      return (
        <div className='w-10 h-10 bg-purple-300 p-1 flex justify-center items-center rounded'>
          <MdOutlineShoppingCart />
        </div>
      );
    case 'fuel':
      return (
        <div className='w-10 h-10 bg-blue-300 p-1 flex justify-center items-center rounded'>
          <BsFuelPumpFill />
        </div>
      );
    default:
      return (
        <div className='w-10 h-10 bg-pink-300 p-1 flex justify-center items-center rounded'>
          <TiHeartFullOutline />
        </div>
      );
  }
}

export default Icons;
