import Card from './components/custom/Card';
import Header from './components/custom/Header';
import { useData } from './hooks/useData';

const App = () => {
  const { skips } = useData();

  return (
    <div className='w-svw'>
      <Header title='Choose Your Skip Size' subTitle='14 day hire period' />
      <div className='grid justify-self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 align-middle justify-items-center'>
        {skips.map((skip) => {
          if (!skip.allowsHeavyWaste) return null;

          return <Card key={skip.id} skip={skip} />;
        })}
      </div>
    </div>
  );
};

export default App;
