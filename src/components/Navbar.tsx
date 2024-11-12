import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path); // Navigate to the desired path
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex gap-6">
        {/* Home Button */}
        <Button className="text-white" onClick={() => handleNavigation('/')}>
          Home
        </Button>

        {/* Gardening VR Game Button */}
        <Button className="text-white" onClick={() => handleNavigation('/gardening')}>
          Gardening
        </Button>

        {/* Mechanical VR Game Button */}
        <Button className="text-white" onClick={() => handleNavigation('/mechanical')}>
          Mechanical
        </Button>

        {/* Health VR Game Button */}
        <Button className="text-white" onClick={() => handleNavigation('/health')}>
          Health
        </Button>

        {/* IT VR Game Button */}
        <Button className="text-white" onClick={() => handleNavigation('/it')}>
          IT
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
