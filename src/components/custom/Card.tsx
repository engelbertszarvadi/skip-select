import { Button } from '../ui/button';
import { CircleCheck, TriangleAlert } from 'lucide-react';
import type { Skip } from '@/hooks/useData';
import type { MouseEvent } from 'react';

interface Props {
  skip: Skip;
  isSelected: boolean;
  onSelect?: (event: MouseEvent) => void;
}

const Card = ({ skip, onSelect, isSelected }: Props) => {
  const title = `${skip.size} Yard Skip`;

  return (
    <div className='w-full max-w-[340px] relative pl-5 pr-5 mb-10'>
      <img
        onClick={onSelect}
        src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
        alt={title}
        className={`cursor-pointer justify-self-center rounded-xl h-60 transition duration-100 ${
          isSelected ? 'brightness-20' : 'brightness-100'
        }`}
      />
      {isSelected && (
        <CircleCheck
          onClick={onSelect}
          className='cursor-pointer text-blue-600 size-12 absolute top-[30%] left-[calc(50%-24px)]'
        />
      )}
      <div className='flex mt-2 mb-2'>
        <div className='w-6/12'>
          <div className='font-bold'>{title}</div>
          <div
            className={`text-sm ${
              isSelected ? 'text-blue-600' : 'text-blue-400'
            }`}
          >
            &pound; {skip.priceBeforeVat}
          </div>
        </div>
        <div className='w-6/12 flex self-center justify-end'>
          <Button
            onClick={onSelect}
            className={`hover:cursor-pointer ${
              isSelected ? 'bg-blue-600' : 'bg-blue-400'
            } transition duration-200 hover:bg-blue-600`}
          >
            Hire for {skip.hirePeriodDays} days
          </Button>
        </div>
      </div>
      {!skip.allowedOnRoad && (
        <div className='flex text-yellow-500'>
          <TriangleAlert className='mr-2' />
          <p>Not allowed on the road!</p>
        </div>
      )}
    </div>
  );
};

export default Card;
