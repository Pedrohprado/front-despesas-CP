import Balance from '../components/balance';
import RecentTransition from '../components/recenttransitions';

const HomePage = () => {
  return (
    <main className=' w-full h-screen flex flex-col'>
      <Balance />
      <RecentTransition />
    </main>
  );
};

export default HomePage;
