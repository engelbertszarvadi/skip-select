import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Button } from '../ui/button';
import {
  ArrowRight,
  ArrowLeft,
  Truck,
  MapPin,
  Trash2,
  Shield,
  Calendar,
  CreditCard,
  type LucideProps,
} from 'lucide-react';

interface Step {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  label: string;
  reached: boolean;
  completed: boolean;
}

const STEPS: Step[] = [
  { icon: MapPin, label: 'Postcode', reached: true, completed: true },
  { icon: Trash2, label: 'Waste Type', reached: true, completed: true },
  { icon: Truck, label: 'Select Skip', reached: true, completed: false },
  { icon: Shield, label: 'Permit Check', reached: false, completed: false },
  { icon: Calendar, label: 'Choose Date', reached: false, completed: false },
  { icon: CreditCard, label: 'Payment', reached: false, completed: false },
];

const StepComponent = ({
  icon: Icon,
  label,
  reached,
  completed,
  index,
}: Step & { index: number }) => {
  return (
    <>
      <div
        className={`${
          reached && 'cursor-pointer'
        } justify-center w-8/12 space-x-2 flex`}
      >
        <Icon
          className={`${reached ? 'text-blue-400' : 'text-gray-600'} shrink-0`}
        />
        <p className='text-nowrap'>{label}</p>
      </div>
      {index !== STEPS.length - 1 && (
        <div
          className={`h-px w-4/12 ${completed ? 'bg-blue-400' : 'bg-gray-600'}`}
        />
      )}
    </>
  );
};

const Steps = () => {
  return STEPS.map((step, index) => (
    <StepComponent key={step.label} index={index} {...step} />
  ));
};

interface Props {
  isSkipSelected: boolean;
}

const Navigation = ({ isSkipSelected }: Props) => {
  return (
    <>
      <Button size='lg'>
        <ArrowLeft />
      </Button>
      <Button
        className='bg-blue-400 disabled:bg-gray-600'
        size='lg'
        disabled={!isSkipSelected}
      >
        Continue
        <ArrowRight />
      </Button>
    </>
  );
};

const Stepper = ({ isSkipSelected }: Props) => {
  return (
    <div className='max-w-[100%] h-[75px] sticky top-0 z-100 bg-[#222222] content-center flex'>
      {/* show proper stepper on larger screens */}
      <div className='hidden lg:flex w-7/12 lg:w-10/12 items-center space-x-2 pl-2 pr-2'>
        <Steps />
      </div>

      {/* show progressbar on smaller screens */}
      <div className='flex lg:hidden flex-col justify-center items-center w-full space-y-1'>
        <span className='text-sm text-white'>{`Step ${3} of ${
          STEPS.length
        }`}</span>
        <div className='w-10/12 h-1 bg-gray-600 rounded'>
          <div
            className='h-1 bg-blue-400 rounded transition-all duration-300'
            style={{
              width: `${(3 / STEPS.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className='flex w-5/12 md:w-2/12 justify-center items-center space-x-2 mr-5'>
        <Navigation isSkipSelected={isSkipSelected} />
      </div>
    </div>
  );
};

export default Stepper;
