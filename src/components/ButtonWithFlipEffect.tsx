import { Button } from '@/components/ui/button';
import Link from 'next/link';

type ButtonWithFlipEffectProps = {
  name: string;
  href: string;
};

const ButtonWithFlipEffect = ({ name, href }: ButtonWithFlipEffectProps) => {
  return (
    <div className="relative w-full">
      {/* Flip Container */}
      <div className="relative w-full aspect-square transform transition-transform duration-300 hover:rotate-y-180">
        {/* Link wrapping Button */}
        <Link href={href}>
          <Button className="w-full h-full flex items-center justify-center text-white">
            {name}
          </Button>
        </Link>

        {/* Background Image (flip to show background on hover) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{ backgroundImage: `url('/images/${name.toLowerCase()}.jpg')` }}
        />
      </div>
    </div>
  );
};

export default ButtonWithFlipEffect;
