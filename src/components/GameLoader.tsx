import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

const GameLoader = ({ gameUrl }: { gameUrl: string }) => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadGame = async () => {
      // Simulate loading with a timeout (or use real loading logic)
      setTimeout(() => setLoading(false), 3000);
    };
    loadGame();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <div>
          <Progress value={50} max={100} className="w-1/2" />
          <p>Loading Game...</p>
        </div>
      ) : (
        <iframe src={gameUrl} className="w-full h-full" />
      )}
    </div>
  );
};

export default GameLoader;
