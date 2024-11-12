import { NextPage } from 'next';
import Link from 'next/link';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      {/* Include the Navbar at the top */}
      <Navbar />
      
      {/* Main Dashboard */}
      <Dashboard />
      
      {/* Link to all other pages */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Explore Our VR Games:</h2>
        <div className="flex justify-center gap-6 mt-4">
          <Link href="/gardening">
            <span className="text-xl text-blue-500 hover:underline">Gardening</span>
          </Link>
          <Link href="/mechanical">
            <span className="text-xl text-blue-500 hover:underline">Mechanical</span>
          </Link>
          <Link href="/health">
            <span className="text-xl text-blue-500 hover:underline">Health</span>
          </Link>
          <Link href="/it">
            <span className="text-xl text-blue-500 hover:underline">IT</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
