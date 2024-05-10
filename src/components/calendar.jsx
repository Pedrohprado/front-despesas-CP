/* eslint-disable react/prop-types */
import 'react-day-picker/dist/style.css';

import { DayPicker } from 'react-day-picker';

const Calendar = ({ date, setDate }) => {
  return (
    <div className=' fixed bottom-[48px] left-7 bg-zinc-950 text-white py-6 px-3 rounded'>
      <DayPicker mode='single' selected={date} onSelect={setDate} />
    </div>
  );
};

export default Calendar;
