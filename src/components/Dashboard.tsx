import { Button } from '@/components/ui/button';
import ButtonWithFlipEffect from './ButtonWithFlipEffect';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Team Electro72</h1>
      <h2 className="mb-4">Welcome to our VR Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <ButtonWithFlipEffect name="Gardening" href="/gardening" />
        <ButtonWithFlipEffect name="Mechanical" href="/mechanical" />
        <ButtonWithFlipEffect name="Health" href="/health" />
        <ButtonWithFlipEffect name="IT" href="/it" />
      </div>
    </div>
  );
};

export default Dashboard;
