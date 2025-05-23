import { useState, type MouseEvent } from 'react';
import Card from './components/custom/Card';
import { useData, type Skip } from './hooks/useData';
import Header from './components/custom/Header';
import Stepper from './components/custom/Stepper';

const App = () => {
  const { skips } = useData();
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null);

  const handleSelect = (event: MouseEvent, currentSkip: Skip) => {
    event.stopPropagation();
    setSelectedSkip((prev) => {
      if (prev === currentSkip.id) return null;

      return currentSkip.id;
    });
  };

  return (
    <div className='w-svw max-w-[100%]'>
      <Stepper isSkipSelected={Boolean(selectedSkip)} />
      <Header
        title='Choose Your Skip Size'
        subTitle='Prices vary depending on size'
      />
      <div className='grid justify-self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 align-middle justify-items-center'>
        {skips.map((skip) => {
          if (!skip.allowsHeavyWaste) return null;

          return (
            <Card
              key={skip.id}
              skip={skip}
              isSelected={skip.id === selectedSkip}
              onSelect={(event) => handleSelect(event, skip)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
